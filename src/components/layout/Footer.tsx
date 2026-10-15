import { Link } from "react-router-dom";
import logo from "../../assets/grafisk-material/Illustrations/logo/logotyp_fjällheim_sekundär.svg";
import footerImage from "../../assets/grafisk-material/Illustrations/Städjan_och_Lillnipen/Berg.svg";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
};

const LINKS: FooterLink[] = [
  { label: "Boka", href: "/Booking" },
  { label: "Företag", href: "/Company" },
  { label: "Upplevelser", href: "/Activities" },
  { label: "Restaurang", href: "/Resturant" },
  { label: "Om oss", href: "/About" },
];

const SocialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/yourpage" },
  { label: "Instagram", href: "https://www.instagram.com/yourpage" },
  { label: "Twitter", href: "https://twitter.com/yourpage" },
];

export default function Footer() {
  return (
    <footer className="bg-primary py-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
          {/* Logotyp och fjällbild till vänster */}
          <div className="flex shrink-0 flex-col items-start">
            <Link to="/">
              <img src={logo} alt="Hotell Fjällheim" className="h-24 w-auto" />
            </Link>

            <img
              src={footerImage}
              alt="Städjan och Lillnipen"
              className="mt-3 h-auto w-64 object-contain"
            />
          </div>

          {/* Alla länkar till höger */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-72">
            {/* Navigeringslänkar */}
            <nav aria-label="Sidfotens navigering">
              <ul className="flex flex-col gap-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="font-lato text-xl hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/*Kontakt*/}
            <div>
              <h2 className="mb-4 font-garamond text-xl text-white">Kontakt</h2>
              <h2 className="mb-4 font-lato text-sm text-white">
                Högstvägen 7 <br />
                791 71 Idre <br />
                booking@fjallheim.se
                <br />
                +46 (0)25320070
                <br />
                org 559568-0348
              </h2>
            </div>
            {/* Sociala medier */}
            <div>
              <h2 className="mb-4 font-garamond text-xl text-white">
                Följ oss
              </h2>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besök oss på Facebook"
                  className="text-white transition hover:text-[#F3E9D7]"
                >
                  <FaFacebook size={28} />
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Besök oss på Instagram"
                  className="text-white transition hover:text-[#F3E9D7]"
                >
                  <FaInstagram size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm">
          &copy; {new Date().getFullYear()} Hotell Fjällheim. Alla rättigheter
          förbehållna.
        </div>
      </div>
    </footer>
  );
}
