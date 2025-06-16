import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import useFirestore from "~/firebase/useFirestore";
import type User from "~/models/users";
import { userConverter } from "~/models/users";

export default function useUser(userId: string) {
    const firestore = useFirestore();
    const [user, setUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        getDoc(
            doc(firestore, "users", userId).withConverter(userConverter),
        ).then((snapshot) => {
            if (!snapshot.exists) {
                setUser(undefined);
                return;
            }
            setUser(snapshot.data());
        });
    }, [firestore, userId]);
    return user;
}
