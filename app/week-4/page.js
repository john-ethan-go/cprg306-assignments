import NewItem from "./new-item";

export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold">Shopping List</h1>
            <NewItem />
        </main>
    );
}