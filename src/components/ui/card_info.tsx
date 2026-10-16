import { Link } from "react-router-dom";
import image from "../../assets/Images/Bilder_bokning/Rum_vit.jpg";

export type CardData = {
    id: number;
    name: string;
    description: string;
    image: string;
    href: string;
}

type cardProps= {
    card: CardData;
};

export default function Card({ card }: cardProps) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm ">
            <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font bold mb-2">{card.name}</h2>
                <p className="text-primary mb-4">{card.description}</p>

            </div>
        </div>
    );
}
