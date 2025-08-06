export default function InputForm() {
  const submitHandler = () => alert("Submitted!");

  return (
    <div className="flex w-[85%] min-w-sm flex-col items-center gap-6 md:w-3xl lg:w-4xl">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
        className="flex w-full items-center justify-center gap-2 sm:gap-3"
      >
        <input
          aria-label="Add an ingredient"
          className="h-11 w-lg min-w-44 grow rounded-md border border-accent bg-yellow-50 px-3 py-2 font-gaegu text-xl text-background placeholder-accent/75 focus:outline-accent"
          placeholder="e.g., luxardo"
          type="text"
          name="ingredient"
        ></input>
        <button
          type="submit"
          className="h-11 w-68 min-w-36 cursor-pointer rounded-md border-2 border-accent bg-button p-1 text-[0.97rem] font-bold text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent active:border-button active:bg-button-text active:text-button sm:text-[1rem]"
        >
          Add ingredient
        </button>
      </form>
      <form
        onSubmit={submitHandler}
        className="flex w-full items-center justify-center gap-2 sm:gap-3"
      >
        <input
          aria-label="Add a vibe"
          className="h-11 w-lg min-w-44 grow rounded-md border border-accent bg-yellow-50 px-3 font-gaegu text-xl text-background placeholder-accent/75 focus:outline-accent"
          placeholder="e.g., fuck the patriarchy"
          type="text"
          name="vibe"
        ></input>
        <button
          type="submit"
          className="h-11 w-68 min-w-36 cursor-pointer rounded-md border-2 border-accent bg-button p-1 text-[0.97rem] font-bold text-nowrap text-button-text shadow-md before:mr-1 before:content-['+'] hover:border-button hover:bg-button-text hover:text-button focus:outline-accent active:border-button active:bg-button-text active:text-button sm:text-[1rem]"
        >
          Add vibe
        </button>
      </form>
    </div>
  );
}
