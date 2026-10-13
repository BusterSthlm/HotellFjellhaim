import { useEffect, useState } from "react";

type NavLink = {
    Label: string;
    href: string;
}

const BRAND = {
    logo: "HotellFjellhaim\Src\assets\grafisk-material\Illustrationer med nya korsstygn\logotyp_fjällheim_primär (1).svg",
    name: "Hotell Fjellhaim",
    href: "/"


}

const LINKS: NavLink[] = [
    {Label: "Home", href: "/"},
    {Label: "About", href: "/about"},
    {Label: "Contact", href: "/contact"}

]

const CTA = {
    label: "Book room today",
    href: "/book"

}
export default function Nav() {
    const path = window.location.pathname;
    const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav aria-label="Huvudmeny" className="flex items-center justify-between px-4 py-3">
                
            {/*logotype*/ }
            <a href={BRAND.href} className="flex items-center">
             {BRAND.logo && <img src={BRAND.logo} alt={BRAND.en} className="h-8 w-auto mr-2" />}
            <span>{BRAND.name}</span>
            </a>

             {/*bokningsnapp*/}
            <a href={CTA.href} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                {CTA.label}
            </a>

            </nav>
        </header>

       

    )
    
}
