import type { LucideIcon } from "lucide-react";

type Feature = { icon: LucideIcon; titel: string; text:string };

export default function Featurebar({items}: {items: Feature[] }) {
    return(
        <div className="bg-white">
            <div className="container-page grid grid-cols-2 gap-y-6 py-6 md:grid-cols-4">
                {
                    items.map(({ icon: Icon, titel, text}, i)=>(
                        <div key={titel} className={`flex items-center gap-3 px-4 ${i > 0 ? "md:border-l md:border-brown/30": ""}`}
                        >
                    <Icon size={26} strokeWidth={1.5}/>
                    <div>
                        <h3 className="text-lg">{titel}</h3>
                        <p className="text-lg">{text}</p>
                    </div>
                </div>
                    
                ))}

export default function Featurebar({ items }: { items: Feature[] }) {
  return (
    <div className="bg-[#F3E9D7]">
      <div className="container-page grid grid-cols-2 gap-y-6 py-6 md:grid-cols-4">
        {items.map(({ icon: Icon, titel, text }, i) => (
          <div
            key={titel}
            className={`flex items-center gap-3 px-4 ${i > 0 ? "md:border-l md:border-brown/30" : ""}`}
          >
            <Icon size={26} strokeWidth={1.5} />
            <div>
              <p className="font-serif text-lg">{titel}</p>
              <p className="font-serif text-lg">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
