import LandingHeader from "./LandingHeader";
import InputForm from "./InputForm.tsx";
import WavyDivider from "./ui/WavyDivider.tsx";
import { Sparkle, Martini } from "lucide-react";

export default function Main() {
  const ingredients = ["gin", "lemon", "vermouth"];
  const vibes = ["eat the rich", "cabin life"];

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient} className="flex items-center gap-1">
      <Martini className="size-3 flex-shrink-0" strokeWidth={2} />
      <span>{ingredient}</span>
    </li>
  ));

  const vibesListItems = vibes.map((vibe) => (
    <li key={vibe} className="flex items-center gap-1">
      <Sparkle className="size-3 flex-shrink-0" strokeWidth={2} />
      <span>{vibe}</span>
    </li>
  ));

  return (
    <main className="m-auto flex w-screen grow flex-col items-center justify-center pb-4">
      <LandingHeader />
      <InputForm />
      <section className="mt-9 flex w-[85%] flex-row items-stretch justify-between gap-4 font-list sm:mt-12 sm:gap-6 md:w-3xl md:gap-10 lg:w-4xl">
        <div className="w-full rounded-md border-3 border-accent bg-list-background px-6 py-4 sm:px-8 sm:py-5 md:w-lg">
          <h2 className="pb-1 text-xl font-bold sm:text-2xl">Ingredients</h2>
          <WavyDivider />
          <ul className="mt-3 space-y-2 indent-2 font-semibold capitalize sm:text-lg">
            {ingredientsListItems}
          </ul>
        </div>
        <div className="w-full rounded-md border-3 border-accent bg-list-background px-6 py-4 sm:px-8 sm:py-5 md:w-lg">
          <h2 className="pb-1 text-xl font-bold sm:text-2xl">Vibes</h2>
          <WavyDivider />
          <ul className="mt-3 space-y-2 indent-2 font-semibold capitalize sm:text-lg">
            {vibesListItems}
          </ul>
        </div>
      </section>

      <button className="relative mt-12 h-16 w-80 cursor-pointer rounded-t-md rounded-b-md border-3 border-accent bg-button p-2 font-accent text-[1.65rem] font-semibold tracking-wide text-button-text shadow-[0_7px_0_0_var(--color-accent)] hover:top-[3px] hover:shadow-none focus:outline-accent active:top-[3px] active:shadow-none sm:mt-15 sm:h-17 sm:w-84 sm:text-[1.75rem]">
        Consult the Oracle
      </button>
    </main>
  );
}
