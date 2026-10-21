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
                <h2 className="mb-2 text-lg font-bold">{card.name}</h2>
                <p className="text-primary mb-4">{card.description}</p>

            </div>
        </div>
    );
}
