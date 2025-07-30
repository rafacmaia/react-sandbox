import headerLogo from "./../assets/barman3.svg";

export default function Header() {
  return (
    <header className="relative flex h-27 w-screen items-center gap-3 bg-white px-8 shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <img className="h-12" src={headerLogo} alt="Bartender logo" />
      <h1 className="font-italiana text-[40px]/15 font-bold tracking-wider text-stone-900">
        Drinks Oracle
      </h1>
      {/*<img*/}
      {/*  className="tranform h-12 scale-x-[-1]"*/}
      {/*  src={barman}*/}
      {/*  alt="Bartender logo"*/}
      {/*/>*/}
    </header>
  );
}

//font-italiana text-[40px]/15 font-bold tracking-wider

//font-montserrat-alt text-[40px]/15 font-semibold tracking-wide

//font-klee text-[40px]/15 font-semibold tracking-wider

//font-quicksand text-[40px]/15 font-semibold tracking-wider

//font-tsukimi text-[40px]/15 font-semibold tracking-wider

//font-raleway text-[40px]/15 font-semibold tracking-wider