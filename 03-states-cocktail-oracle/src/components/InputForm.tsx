import type { FormEvent } from "react";

interface InputFormProps {
  addIngredient: (ingredient: string) => void;
  addVibe: (vibe: string) => void;
}

export default function InputForm({ addIngredient, addVibe }: InputFormProps) {
  const placeholderIngredients: string[] = [
    "luxardo",
    "basil",
    "mustard",
    "absinthe",
    "earl grey",
    "peaches",
    "cynar",
    "pisco",
    "chartreuse",
    "gummy bears",
  ];
  const placeholderVibes: string[] = [
    "eat the rich",
    "fuck the patriarchy",
    "the blood of my enemies",
    "can't afford a Japan trip",
    "dual income, no kids",
    "is pedro pascal bi?",
    "urban witches",
    "late capitalist nihilism",
    "JOMO",
    "be gay do crime",
    "tears in rain, time to die",
    "bisexual summer",
  ];

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    if (formData.get("ingredient")) {
      addIngredient(formData.get("ingredient") as string);
    } else if (formData.get("vibe")) {
      addVibe(formData.get("vibe") as string);
    }

    e.currentTarget.reset();
  };

  return (
    <div className="flex w-[85%] min-w-[27rem] flex-col items-center gap-4 sm:gap-6 md:w-3xl lg:w-4xl">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex w-full items-center justify-center gap-2 sm:gap-4"
      >
        <input
          aria-label="Add an ingredient"
          className="h-11 w-lg min-w-44 grow rounded-md border border-accent bg-yellow-50 px-3 py-2 font-gaegu text-lg text-background placeholder-accent/75 focus:outline-accent sm:text-xl"
          placeholder={`e.g., ${placeholderIngredients[Math.floor(Math.random() * placeholderIngredients.length)]}`}
          type="text"
          name="ingredient"
        ></input>
        <button
          type="submit"
          className="h-11 w-68 min-w-36 cursor-pointer rounded-md border-2 border-accent bg-primary p-1 text-[0.95rem] font-bold text-nowrap text-button-text shadow-md hover:border-button hover:bg-button-text hover:text-button focus:outline-accent active:border-button active:bg-button-text active:text-button sm:text-[1rem] sm:before:mr-1 sm:before:content-['+']"
        >
          Add ingredient
        </button>
      </form>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex w-full items-center justify-center gap-2 sm:gap-4"
      >
        <input
          aria-label="Add a vibe"
          className="h-11 w-lg min-w-44 grow rounded-md border border-accent bg-yellow-50 px-3 py-2 font-gaegu text-lg text-background placeholder-accent/75 focus:outline-accent sm:text-xl"
          placeholder={`e.g., ${placeholderVibes[Math.floor(Math.random() * placeholderVibes.length)]}`}
          type="text"
          name="vibe"
        ></input>
        <button
          type="submit"
          className="h-11 w-68 min-w-36 cursor-pointer rounded-md border-2 border-accent bg-primary p-1 text-[0.95rem] font-bold text-nowrap text-button-text shadow-md hover:border-button hover:bg-button-text hover:text-button focus:outline-accent active:border-button active:bg-button-text active:text-button sm:text-[1rem] sm:before:mr-1 sm:before:content-['+']"
        >
          Add vibe
        </button>
      </form>
    </div>
  );
}
