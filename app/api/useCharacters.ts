import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import useFirestore from "~/firebase/useFirestore";
import type Character from "~/models/character";
import { characterConverter } from "~/models/character";

export default function useCharacters(userId?: string) {
    const firestore = useFirestore();
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        if (!userId) {
            setCharacters([]);
            return;
        }

        getDocs(
            query(
                collection(firestore, "characters"),
                where("owner_uid", "==", userId),
            ).withConverter(characterConverter),
        ).then((snapshot) => {
            if (snapshot.empty) {
                setCharacters([]);
                return;
            }
            setCharacters(snapshot.docs.map((doc) => doc.data()));
        });
    }, [firestore, userId]);
    return characters;
}
