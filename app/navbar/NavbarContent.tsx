import useFirebaseAuth from "~/firebase/FirebaseAuth";

export default function NavbarContent() {
    const { user, login, logout } = useFirebaseAuth();
    return (
        <div className="flex flex-col h-full p-4">
            <div className="flex-1">Content</div>
            <div className="flex-none">
                {!!user && (
                    <p className="text-lg text-ellipsis text-nowrap overflow-hidden">
                        Hello, {user.displayName}
                    </p>
                )}
                <button
                    className="btn w-full mt-4"
                    type="button"
                    onClick={user ? logout : login}
                >
                    {user ? "Log Out" : "Sign In"}
                </button>
            </div>
        </div>
    );
}
