import {
    initializeApp,
    type FirebaseApp,
    type FirebaseOptions,
} from "firebase/app";
import type { PropsWithChildren } from "react";
import React, { useContext } from "react";

const FirebaseContext = React.createContext<FirebaseApp | undefined>(undefined);

export function FirebaseContextProvider({
    firebaseOptions,
    children,
}: PropsWithChildren<FirebaseContextProps>) {
    const firebaseApp = initializeApp(firebaseOptions);
    return (
        <FirebaseContext.Provider value={firebaseApp}>
            {children}
        </FirebaseContext.Provider>
    );
}

export function useFirebaseContext() {
    const firebaseApp = useContext(FirebaseContext);
    if (!firebaseApp) {
        throw new Error(
            "Components using useFirebaseContext must be wrapper with FirebaseContextProvider",
        );
    }
    return firebaseApp;
}

interface FirebaseContextProps {
    firebaseOptions: FirebaseOptions;
}
