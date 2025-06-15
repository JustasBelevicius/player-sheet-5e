import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    type User,
} from "firebase/auth";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFirebaseContext } from "./FirebaseContext";

export default function useFirebaseAuth() {
    const firebaseApp = useFirebaseContext();
    const auth = getAuth(firebaseApp);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const cleanup = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return cleanup;
    }, [auth]);
    const login = useCallback(
        () => signInWithPopup(auth, new GoogleAuthProvider()),
        [auth],
    );
    const logout = useCallback(() => signOut(auth), [auth]);

    return useMemo(() => ({ user, login, logout }), [user, login, logout]);
}
