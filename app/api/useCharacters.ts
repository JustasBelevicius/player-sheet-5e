import { collection, getDocs, query, where } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import useFirestore from "~/firebase/useFirestore";
import type Character from "~/models/character";
import { characterConverter } from "~/models/character";

export function useCharacterSupplier(): (userId?: string) => Promise<Character[]> {
    const firestore = useFirestore();

    return useCallback((userId?: string) => {
        if (!userId) {
            return Promise.resolve([]);
        }

        return getDocs(
            query(
                collection(firestore, "characters"),
                where("owner_uid", "==", userId),
            ).withConverter(characterConverter),
        ).then((snapshot) => {
            if (snapshot.empty) {
                return [];
            }
            return snapshot.docs.map((doc) => doc.data());
        });
    }, [firestore]);
}

export default function useCharacters(userId?: string): Character[] {
    const characterSupplier = useCharacterSupplier();
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        characterSupplier(userId).then(setCharacters);
    }, [characterSupplier, userId]);
    return characters;
}
