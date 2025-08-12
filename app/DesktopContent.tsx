import { Outlet } from "react-router";
import WebSidebar from "./navbar/Navbar";

export default function AppContent() {
    return (
        <div className="sm:flex min-h-screen">
            <div className="w-52 flex-none">
                <WebSidebar />
            </div>
            <div className="flex-none divider divider-horizontal m-0" />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}
