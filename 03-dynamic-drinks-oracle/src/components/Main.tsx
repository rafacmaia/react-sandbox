export default function Main() {
  return (
    <main className="h-full w-screen grow px-3 pt-20">
      <form className="m-auto flex w-4/5 min-w-sm flex-col items-center gap-6">
        <div className="flex w-full justify-center gap-2 md:gap-3">
          <input
            aria-label="Add an ingredient"
            className="w-lg max-w-150 min-w-44 rounded-md border bg-white pl-2 focus:border focus:outline-red-400"
            placeholder="e.g., absinthe"
            type="text"
          ></input>
          <button className="w-70 min-w-37 cursor-pointer rounded-md border-2 bg-stone-900 p-1 text-base/7 font-semibold tracking-wide text-nowrap text-stone-100 shadow-md focus:outline-red-400">
            + Add ingredient
          </button>
        </div>
        <div className="flex w-full justify-center gap-2 md:gap-3">
          <input
            aria-label="Add a vibe"
            className="w-lg max-w-150 min-w-44 rounded-md border bg-white pl-2 focus:outline-red-400"
            placeholder="e.g., fuck my ex"
            type="text"
          ></input>
          <button className="w-70 min-w-37 cursor-pointer rounded-md border-2 bg-stone-900 p-1 text-base/7 font-semibold tracking-wide text-stone-100 shadow-md focus:outline-red-400">
            + Add vibe
          </button>
        </div>
        <button className="font-italiana mt-4 h-16 w-96 cursor-pointer rounded-md border-2 bg-yellow-300 p-2 text-[1.5rem] font-bold tracking-widest text-black shadow-md focus:outline-black">
          Consult the Oracle
        </button>
      </form>
    </main>
  );
}
