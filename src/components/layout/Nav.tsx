import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/grafisk-material/Illustrationer med nya korsstygn/logotyp_fjällheim_primär.svg";

type NavLink = {
    Label: string;
    href: string;
}

const BRAND = {
    logo: logo,
    name: "Hotell Fjellhaim",
    href: "/"

}

const LINKS: NavItem[] = [
    {Label: "Home", href: "/"},
    {Label: "About", href: "/about"},
    {Label: "Contact", href: "/contact"}

];

const CTA = {
    label: "Book room today",
    href: "/book"

}

const linkClass= ({active}: {active: boolean}) => `px-3 py-2 rounded-md text-sm font-medium ${active ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}`; 


export default function Nav() {
    const [open, setOpen] = useState(false);
    const path = window.location.pathname;
    const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <nav aria-label="Huvudmeny" className="flex items-center justify-between px-4 py-3">
                
            {/*logotype*/ }
            <a href={BRAND.href} className="flex items-center">
             {BRAND.logo && <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto mr-2" />}
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
