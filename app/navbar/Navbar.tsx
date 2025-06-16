import classNames from "classnames";
import { useFirebaseAuth } from "~/firebase/FirebaseAuthContext";
import NavbarContent from "./NavbarContent";
import NavbarFooter from "./NavbarFooter";

export default function Navbar() {
    const { user, login, logout } = useFirebaseAuth();
    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                <NavbarContent user={user} />
            </div>
            <div className="flex-none px-4 pb-12">
                {!!user && <NavbarFooter user={user} />}
                <button
                    className={classNames(
                        "btn w-full mt-4 btn-soft",
                        !user ? "btn-primary" : "btn-error",
                    )}
                    type="button"
                    onClick={user ? logout : login}
                >
                    {user ? "Log Out" : "Sign In"}
                </button>
            </div>
        </div>
    );
}
