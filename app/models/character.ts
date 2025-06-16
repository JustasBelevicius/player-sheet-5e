import type { FirestoreDataConverter } from "firebase/firestore";

export default interface Character {
    id: string;
    name: string;
    owner_uid: string;
}

interface CharacterDb {
    name: string;
    owner_uid: string;
}

export const characterConverter: FirestoreDataConverter<
    Character,
    CharacterDb
> = {
    toFirestore: (character: Character) => ({
        name: character.name,
        owner_uid: character.owner_uid,
    }),
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return {
            id: snapshot.id,
            name: data.name,
            owner_uid: data.owner_uid,
        };
    },
};
