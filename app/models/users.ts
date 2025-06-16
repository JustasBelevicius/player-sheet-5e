import type { FirestoreDataConverter } from "firebase/firestore";

export default interface User {
    role: "Admin" | null;
}

export interface UserDb {
    role: "Admin" | null;
}

export const userConverter: FirestoreDataConverter<User, UserDb> = {
    toFirestore: (user: User) => ({
        role: user.role,
    }),
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return {
            role: data.role,
        };
    },
};
