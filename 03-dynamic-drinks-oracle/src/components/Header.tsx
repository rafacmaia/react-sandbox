import headerLogoAlt from "./../assets/barman.svg";

export default function Header() {
  return (
    <header className="flex h-26 w-screen items-center justify-center gap-4 bg-header px-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <img
        className="h-13 translate-y-1"
        src={headerLogoAlt}
        alt="Bartender logo"
      />
      <h1 className="font-title text-[46px]/13 font-normal tracking-wide text-nowrap text-primary sm:text-[50px]/15">
        Drinks Oracle
      </h1>
      {/*<img*/}
      {/*  className="tranform h-13 translate-y-1 scale-x-[-1]"*/}
      {/*  src={headerLogoAlt}*/}
      {/*  alt="Bartender logo"*/}
      {/*/>*/}
    </header>
  );
}

// Italiana with no logo? -- font-extrabold sm:text-[55px]/15