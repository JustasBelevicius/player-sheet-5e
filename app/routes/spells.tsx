export default function SpellsRoute() {
    return (
        <div className="container mx-auto p-4">
            Spells Route
        </div>
    );
}

export function meta() {
    return [
        { title: "Spells - 5e Player Sheets" },
        {
            name: "description",
            content: "View and manage your D&D 5e spells",
        },
    ];
}
