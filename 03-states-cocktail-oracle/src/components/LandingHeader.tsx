import headerLogo from "../assets/logo-barman.svg";

export default function LandingHeader() {
  function handleMouseOver() {
    console.log("I'm being hovered over!");
  }

  return (
    <header className="mb-6 flex items-end justify-between gap-4 sm:gap-7">
      <img
        onMouseOver={handleMouseOver}
        className="h-13 translate-y-1 sm:inline sm:h-18 sm:translate-0 md:h-21"
        src={headerLogo}
        alt="Bartender logo"
      />
      <h1 className="align-text-top font-title text-[3rem] font-bold tracking-wide text-nowrap text-primary underline decoration-accent decoration-wavy decoration-4 underline-offset-[0.75rem] sm:text-[4rem] md:text-[5rem]">
        Cocktail Oracle
      </h1>
    </header>
  );
}

// Italiana with no logo? -- font-extrabold sm:text-[55px]/15