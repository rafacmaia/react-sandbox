import LandingHeader from "./LandingHeader";
import InputForm from "./InputForm.tsx";
import InputLists from "./InputLists.tsx";
import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [vibes, setVibes] = useState<string[]>([]);

  function addIngredient(ingredient: string) {
    setIngredients([...ingredients, ingredient]);
    console.log(ingredients);
  }

  function addVibe(vibe: string) {
    setVibes([...vibes, vibe]);
    console.log(vibes);
  }

  return (
    <main className="flex w-screen grow flex-col items-center justify-center">
      <LandingHeader />
      <InputForm addIngredient={addIngredient} addVibe={addVibe} />
      <InputLists ingredients={ingredients} vibes={vibes} />

      <button className="relative mt-12 h-16 w-80 cursor-pointer rounded-t-md rounded-b-md border-3 border-accent bg-button p-2 font-accent text-[1.65rem] font-semibold tracking-wide text-button-text shadow-[0_7px_0_0_var(--color-accent)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:mt-15 sm:h-17 sm:w-84 sm:text-[1.75rem]">
        Consult the Oracle
      </button>
    </main>
  );
}
