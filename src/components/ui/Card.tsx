import { Link } from "react-router-dom";

export type Room = {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    guests: number;
    href: string;
}

type RoomCardProps = {
    room: Room;
};

export default function RoomCard({ room }: RoomCardProps) {
    return (
        <div className="bg-secondary rounded-lg shadow-md overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{room.name}</h2>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">${room.price}</span>
                    <span className="text-gray-600">{room.guests} gäster</span>
                </div>
                <Link to={room.href} className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">
                    Läs mer 
                </Link>
            </div>
        </div>
    );
}
