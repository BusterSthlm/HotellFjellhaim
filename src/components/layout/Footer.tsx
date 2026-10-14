import { Link } from "react-router-dom";
import logo from "../../assets/grafisk-material/Illustrations/logo/logotyp_fjällheim_primär.svg";

type footerLink = {
    label: string;
    href: string;
};

const LINKS: footerLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Upplevelser", href: "/Activities" },
    { label: "Bokning", href: "/Booking" },
    { label: "Resturang", href: "/resturant" },
    { label: "Företag", href: "/Company" },
    { label: "Contact", href: "/contact" },

];


const SocialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/yourpage" },
    { label: "Instagram", href: "https://www.instagram.com/yourpage" },
    { label: "Twitter", href: "https://twitter.com/yourpage" },
];

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link to="/">
                            <img src={logo} alt="Hotell Fjellhaim" className="h-8 w-auto" />
                        </Link>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <ul className="flex space-x-4">
                            {LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link to={link.href} className="hover:text-blue-400">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className="flex space-x-4">
                            {SocialLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} target="_
blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Hotell Fjellhaim. All rights reserved.
                </div>
            </div>

        </footer>
    );                               
}