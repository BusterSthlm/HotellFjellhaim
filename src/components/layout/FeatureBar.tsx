import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  titel: string;
  text: string;
};

type FeatureBarProps = {
  items: Feature[];
};

export default function FeatureBar({ items }: FeatureBarProps) {
  return (
    <section className="bg-[#F3E9D7]">
      <div className="container-page grid grid-cols-2 gap-y-6 py-6 md:grid-cols-4">
        {items.map(({ icon: Icon, titel, text }, index) => (
          <div
            key={titel}
            className={`flex items-center gap-3 px-4 ${
              index > 0 ? "md:border-l md:border-brown/30" : ""
            }`}
          >
            <Icon size={26} strokeWidth={1.5} />

            <div>
              <h3 className="text-lg">{titel}</h3>
              <p className="text-lg">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
