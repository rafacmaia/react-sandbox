import { useState } from "react";
import LandingHeader from "./LandingHeader";
import InputForm from "./InputForm";
import InputLists from "./InputLists";

export default function MainSection() {
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
    <main
      className={`flex w-screen grow flex-col items-center gap-12 ${ingredients.length > 0 || vibes.length > 0 ? "justify-around pt-8 pb-12 sm:justify-between sm:pt-6" : "justify-center"}`}
    >
      <section
        className={`flex w-screen flex-col items-center justify-center gap-12`}
      >
        <LandingHeader />
        <InputForm addIngredient={addIngredient} addVibe={addVibe} />
        <InputLists ingredients={ingredients} vibes={vibes} />
      </section>

      {(ingredients.length > 0 || vibes.length > 0) && (
        <button className="relative mt-6 h-14 w-70 cursor-pointer rounded-t-md rounded-b-md border-3 border-accent bg-button p-2 font-accent text-[1.35rem] font-semibold tracking-wide text-button-text shadow-[0_7px_0_0_var(--color-accent)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:h-17 sm:w-84 sm:text-[1.75rem]">
          Consult the Oracle
        </button>
      )}
    </main>
  );
}
