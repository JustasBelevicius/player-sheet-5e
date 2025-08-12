import type { User } from "firebase/auth";
import { Link } from "react-router";
import useCharacters from "~/api/useCharacters";

export default function NavbarContent({ user }: { user: User | null }) {
    const characters = useCharacters(user?.uid);

    return (
        <div className="flex-row">
            <Link to="/characters"  className="tracking-wide">Characters</Link>
            <ul className="list">
                {characters.slice(0, 5).map(({ name, id }) => (
                    <li key={id} className="list-row flex items-center">
                        <img
                            className="size-10 mask mask-squircle"
                            src="https://placehold.co/100"
                            alt=""
                        />
                        <div>{name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
