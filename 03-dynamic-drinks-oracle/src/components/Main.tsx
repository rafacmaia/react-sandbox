import headerLogoAlt from "../assets/barman.svg";

export default function Main() {
  return (
    <main className="flex w-screen grow pb-4">
      <div className="m-auto flex w-full flex-col items-center justify-center">
        {/* HEADER TEST */}
        <div className="mb-20 flex flex-row items-end justify-center gap-4 sm:mb-20 sm:gap-7">
          <img
            className="h-15 translate-y-1 sm:h-21 sm:translate-0"
            src={headerLogoAlt}
            alt="Bartender logo"
          />
          <h1 className="inline align-text-top font-title text-[52px] font-light tracking-wide text-nowrap text-primary underline decoration-accent decoration-wavy decoration-4 underline-offset-[0.8rem] sm:text-[80px]">
            Drinks Oracle
          </h1>
        </div>

        <form className="mx-auto flex w-[85%] min-w-sm flex-col items-center gap-6">
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <input
              aria-label="Add an ingredient"
              className="h-11 w-lg min-w-44 rounded-md border border-accent bg-yellow-50 px-3 py-2 font-gaegu text-xl text-accent placeholder-background focus:outline-accent"
              placeholder="e.g., luxardo"
              type="text"
            ></input>
            <button className="h-11 w-70 min-w-37 cursor-pointer rounded-md border-2 border-accent bg-button p-1 text-[1rem] font-bold text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent">
              Add ingredient
            </button>
          </div>
          <div className="flex w-full items-center justify-center gap-2 sm:gap-3">
            <input
              aria-label="Add a vibe"
              className="h-11 w-lg min-w-44 rounded-md border border-accent bg-yellow-50 px-3 font-gaegu text-xl text-accent placeholder-background focus:outline-accent"
              placeholder="e.g., fuck the patriarchy"
              type="text"
            ></input>
            <button className="h-11 w-70 min-w-37 cursor-pointer rounded-md border-2 border-accent bg-button p-1 text-[1rem] font-bold text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent">
              Add vibe
            </button>
          </div>
          <button className="relative mt-6 h-16 w-80 cursor-pointer rounded-t-md rounded-b-md border-3 border-accent bg-button p-2 font-accent text-[1.65rem] font-semibold tracking-wide text-button-text shadow-[0_7px_0_0_var(--color-accent)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:h-17 sm:w-84 sm:w-99 sm:text-[1.75rem]">
            Consult the Oracle
          </button>
        </form>
      </div>
    </main>
  );
}
