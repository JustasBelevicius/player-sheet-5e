export default function CharactersRoute() {
    return (
        <div className="container mx-auto p-4">
            Characters Route
        </div>
    );
}

export function meta() {
    return [
        { title: "Characters - 5e Player Sheets" },
        {
            name: "description",
            content: "View and manage your D&D 5e characters",
        },
    ];
}
