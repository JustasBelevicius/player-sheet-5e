import { Outlet } from "react-router";
import NavbarContent from "./navbar/NavbarContent";

export default function AppContent() {
    return (
        <div className="flex min-h-screen">
            <div className="w-48 flex-none">
                <NavbarContent />
            </div>
            <div className="flex-none divider divider-horizontal" />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
