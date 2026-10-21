import { Link } from "react-router-dom";

export type Room = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    guests: number;
    href: string;
};

type RoomCardProps = {
    room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
    return (
        <article className="max-w-sm overflow-hidden rounded-lg bg-white shadow-md">
            <img src={room.image} alt={room.name} className="h-48 w-full object-cover" />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-semibold">{room.name}</h2>
                <p className="mb-4 text-gray-600">{room.description}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-800">{room.price.toLocaleString("sv-SE")} kr</span>
                    <span className="text-gray-600">{room.guests} gäster</span>
                </div>
                <Link to={room.href} className="mt-4 inline-block rounded bg-primary px-4 py-2 text-white hover:bg-tertiary">
                    Läs mer 
                </Link>
            </div>
        </article>
    );
}
