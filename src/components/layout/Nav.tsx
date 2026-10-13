import { useEffect, useState } from "react";

type NavProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const BRAND = {
    logo: "HotellFjellhaim\Src\assets\grafisk-material\Illustrationer med nya korsstygn\logotyp.svg",
    en: "Hotell Fjellhaim",
    no: "Fjellhaim",

}

const LINKS: NavLink[] = [
    {Label: "Home", href: "/"},
    {Label: "About", href: "/about"},
    {Label: "Contact", href: "/contact"}

]

const CTA = {
    label: "Book Now",
    href: "/book"

}

// förklara 
export default function Nav(){
    const [isOpen, setIsOpen] = useState(false);
    const [path, SetPath] = useState("/");

}

//aktiv länk utan beroende till router.
useEffect(() => {
    const currentPath = window.location.pathname;
    SetPath(currentPath);
}

//stäng
