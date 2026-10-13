function Header() {
  return (
    <header className="flex w-full items-center justify-between px-8 py-4">
      {/* Logotyp till vänster */}
      <a href="/" className="ml-6 shrink-0">
        <img
          src="/src/assets/grafisk-material/logotyp_fjällheim_primär.svg"
          alt="Logotyp"
          className="block h-[75px] w-auto object-contain"
        />
      </a>

      {/* Navigering */}
      <nav className="flex items-center gap-8">
        <a
          href="/"
          className="font-garamond text-lg hover:underline text-[#72492C]"
        >
          Boka
        </a>
        <a
          href="/"
          className="font-garamond text-lg hover:underline text-[#72492C]"
        >
          Företag
        </a>
        <a
          href="/"
          className="font-garamond text-lg hover:underline text-[#72492C]"
        >
          Upplevelser
        </a>
        <a
          href="/"
          className="font-garamond text-lg hover:underline text-[#72492C]"
        >
          Restaurang
        </a>
        <a
          href="/"
          className="font-garamond text-lg hover:underline text-[#72492C]"
        >
          Om
        </a>
      </nav>

      {/* Knapp till höger */}
      <button className="shrink-0 rounded-lg bg-[#72492C] px-6 py-3 font-['Lato'] text-white transition hover:bg-purple-700">
        Boka nu
      </button>
    </header>
  );
}

export default Header;
