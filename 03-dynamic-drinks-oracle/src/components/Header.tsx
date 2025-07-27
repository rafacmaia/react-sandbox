import barman from "./../assets/barman3.svg";

export default function Header() {
  return (
    <header className="relative flex h-27 w-screen items-center justify-center gap-5 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]">
      <img className="h-13" src={barman} alt="Bartender logo" />
      <h1 className="font-italiana text-[40px]/15 font-bold tracking-wider">
        Drinks Oracle
      </h1>
    </header>
  );
}

//font-italiana text-[40px]/15 font-bold tracking-wider

//font-montserrat-alt text-[40px]/15 font-semibold tracking-wide

//font-klee text-[40px]/15 font-semibold tracking-wider

//font-quicksand text-[40px]/15 font-semibold tracking-wider

//font-tsukimi text-[40px]/15 font-semibold tracking-wider

//font-raleway text-[40px]/15 font-semibold tracking-wider