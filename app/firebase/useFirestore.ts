import { getFirestore } from "firebase/firestore";
import { useFirebaseContext } from "./FirebaseContext";

export default function useFirestore() {
    const firebaseApp = useFirebaseContext();
    return getFirestore(firebaseApp);
}
