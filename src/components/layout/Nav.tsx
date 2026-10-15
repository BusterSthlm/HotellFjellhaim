import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/grafisk-material/Illustrations/logo/logotyp_fjällheim_primär.svg";

type NavItem = {
  label: string;
  href: string;
};

const BRAND = {
  logo,
  name: "Hotell Fjellhaim",
  href: "/",
};

const LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Om oss", href: "/About" },
  { label: "Möten och företag", href: "/Company" },
  { label: "Resturang", href: "/Restaurant" },
  { label: "upplevelse", href: "/Experience" },
  { label: "Contact", href: "/Contact" },
  { label: "Boka rum", href: "/Booking" },
];

const CTA = {
  label: "Boka rum",
  href: "/booking",
};

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-primary" : "text-primary hover:text-primary"}`;

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav
        aria-label="Huvudmeny"
        className="flex items-center justify-between px-4 py-3"
      >
        {/*logotype*/}
        <Link to={BRAND.href} className="flex items-center">
          <img src={BRAND.logo} alt={BRAND.name} className="h-8 w-auto" />
        </Link>

        {/*Desktop*/}
        <ul className="hidden md:flex space-x-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/*Boka knapp*/}
        <Link
          to={CTA.href}
          className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary"
        >
          {CTA.label}
        </Link>

        {/*Mobile menu button*/}
        <button
          className="md:hidden px-3 py-2"
          aria-expanded={open}
          aria-label="Öppna meny"
          onClick={() => setOpen(!open)}
        >
          _
        </button>
      </nav>

      {/*Mobile meny*/}
      {open && (
        <ul className="md:hidden space-y-1 px-2 py-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <Link
            to={CTA.href}
            className="block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary"
            onClick={() => setOpen(false)}
          >
            {CTA.label}
          </Link>
        </ul>
      )}
    </header>
  );
}
