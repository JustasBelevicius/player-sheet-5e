import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    type User,
} from "firebase/auth";
import React, {
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type PropsWithChildren,
} from "react";
import { useFirebaseContext } from "./FirebaseContext";

interface FirebaseAuth {
    user: User | null;
    login: () => void;
    logout: () => void;
}

const FirebaseAuthContext = React.createContext<FirebaseAuth | undefined>(
    undefined,
);

export function FirebaseAuthProvider({ children }: PropsWithChildren<any>) {
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
    const value = useMemo(
        () => ({ user, login, logout }),
        [login, logout, user],
    );
    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    );
}

export function useFirebaseAuth() {
    const firebaseAuthCOntext = useContext(FirebaseAuthContext);
    if (!firebaseAuthCOntext) {
        throw new Error(
            "Components using useFirebaseAuth must be wrapper with FirebaseAuthProvider",
        );
    }
    return firebaseAuthCOntext;
}
