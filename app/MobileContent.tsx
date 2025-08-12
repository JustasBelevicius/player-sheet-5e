import { Link, Outlet } from "react-router";
import WebSidebar from "./navbar/Navbar";
import CharactersIcon from "./assets/characters.svg?react";
import SpellsIcon from "./assets/spells.svg?react";

import { useIsMobile } from "./hooks/useIsMobile";

export default function AppContent() {
    const isMobile = useIsMobile();
    
    return (
        <div className="flex min-h-screen">
            <Outlet />
            <div className="dock dock-lg">
                <Link to="/characters">
                    <CharactersIcon className="size-9"/>
                    <span className="dock-label">Characters</span>
                </Link>
                <Link  to="/spells">
                    <SpellsIcon className="size-8"/>
                    <span className="dock-label">Spells</span>
                </Link>
            </div>
        </div>
    );
}
