import { getAuth } from "firebase/auth";
import { useFirebaseContext } from "./FirebaseContext";

export default function useFirebaseAuth() {
    const firebaseApp = useFirebaseContext();
    return getAuth(firebaseApp);
}
