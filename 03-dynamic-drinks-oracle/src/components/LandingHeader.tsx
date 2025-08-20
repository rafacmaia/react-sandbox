import headerLogo from "../assets/logo-barman.svg";

export default function LandingHeader() {
  function handleMouseOver() {
    console.log("I'm being hovered over!");
  }

  return (
    <header className="mb-6 flex flex-row items-end justify-center gap-4 sm:gap-7">
      <img
        onMouseOver={handleMouseOver}
        className="h-15 translate-y-1 sm:h-18 sm:translate-0 md:h-21"
        src={headerLogo}
        alt="Bartender logo"
      />
      <h1 className="inline align-text-top font-title text-[3.25rem] font-bold tracking-wide text-nowrap text-primary underline decoration-accent decoration-wavy decoration-4 underline-offset-[0.75rem] sm:text-[4rem] md:text-[5rem]">
        Drinks Oracle
      </h1>
    </header>
  );
}

// Italiana with no logo? -- font-extrabold sm:text-[55px]/15