import headerLogoAlt from "../assets/barman.svg";

export default function Main() {
  return (
    <main className="flex w-screen grow flex-col items-center justify-center px-2 pb-5 sm:px-3">
      {/* HEADER TEST */}
      <div className="mb-20 flex items-center justify-center gap-4 sm:gap-6">
        <img
          className="h-16 sm:h-20"
          src={headerLogoAlt}
          alt="Bartender logo"
        />
        <h1 className="font-title text-[46px]/13 font-normal tracking-wide text-nowrap text-primary sm:text-[80px]">
          Drinks Oracle
        </h1>
      </div>

      <form className="mx-auto flex w-[85%] min-w-sm flex-col items-center gap-6">
        <div className="flex w-full items-center justify-center gap-1 sm:gap-3">
          <input
            aria-label="Add an ingredient"
            className="h-10 w-lg min-w-44 rounded-md border border-primary bg-yellow-50 px-3 py-2 font-gaegu text-lg text-accent focus:outline-accent"
            placeholder="e.g., luxardo"
            type="text"
          ></input>
          <button className="w-70 min-w-37 cursor-pointer rounded-md border-2 border-button-text bg-button p-1 text-[0.9rem]/8 font-black text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent">
            Add ingredient
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-1 sm:gap-3">
          <input
            aria-label="Add a vibe"
            className="h-10 w-lg min-w-44 rounded-md border border-primary bg-yellow-50 px-3 font-gaegu text-lg text-accent focus:outline-accent"
            placeholder="e.g., fuck the patriarchy"
            type="text"
          ></input>
          <button className="w-70 min-w-37 cursor-pointer rounded-md border-2 border-button-text bg-button p-1 text-[0.9rem]/8 font-black text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent">
            Add vibe
          </button>
        </div>
        <button className="relative mt-6 h-16 w-full cursor-pointer rounded-t-md rounded-b-md border-3 border-button-text bg-button p-2 font-accent text-[1.5rem] font-extrabold tracking-wide text-button-text shadow-[0_7px_0_0_rgb(255,223,32)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:w-99">
          Consult the Oracle
        </button>
      </form>
    </main>
  );
}
