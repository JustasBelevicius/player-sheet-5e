import type { User } from "firebase/auth";
import useUser from "~/api/useUser";

export default function NavbarFooter({ user }: { user: User }) {
    const { role } = useUser(user.uid) || { role: undefined };
    return (
        <div className="flex items-end">
            <div className="flex-1 overflow-hidden">
                <p className="text-base">Welcome,</p>
                <p className="text-base text-ellipsis text-nowrap overflow-hidden font-bold">
                    {user.displayName}
                </p>
            </div>
            {!!role && (
                <div className="flex-none badge badge-primary ml-2">{role}</div>
            )}
        </div>
    );
}
