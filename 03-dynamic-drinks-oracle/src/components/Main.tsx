export default function Main() {
  return (
    <main className="w-screen grow px-2 pt-19 pb-3 sm:px-3">
      <form className="m-auto flex w-[85%] min-w-sm flex-col items-center gap-6">
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
        <button className="relative mt-6 h-16 w-100 cursor-pointer rounded-t-md rounded-b-md border-3 border-button-text bg-button p-2 font-accent text-[1.5rem] font-extrabold tracking-wide text-button-text shadow-[0_7px_0_0_rgb(255,223,32)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:w-100">
          Consult the Oracle
        </button>
      </form>
    </main>
  );
}
