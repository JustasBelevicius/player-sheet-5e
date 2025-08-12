import classNames from "classnames";
import { useFirebaseAuth } from "~/firebase/FirebaseAuthContext";
import { useIsMobile } from "~/hooks/useIsMobile";

export default function HomeRoute() {
    const isMobile = useIsMobile();
    const { user, login } = useFirebaseAuth();

    if (isMobile && !user) {
        return <button
            className={classNames(
                "btn w-full mt-4 btn-soft",
                "btn-primary",
            )}
            type="button"
            onClick={login}
        >
            "Sign In"
        </button>
    }
    return null;
}

export function meta() {
    return [
        { title: "5e Player Sheets" },
        {
            name: "description",
            content: "Create and Manage your DnD 5e Characters",
        },
    ];
}
