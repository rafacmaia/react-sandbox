import WavyDivider from "./ui/WavyDivider.tsx";
import { Sparkle, Martini } from "lucide-react";
import type { JSX } from "react";

interface Props {
  ingredients: string[];
  vibes: string[];
}

export default function InputLists({ ingredients, vibes }: Props) {
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
    <section
      className={`mt - 12 flex w-[85%] flex-row items-stretch justify-between gap-4 font-list sm:mt-15 sm:gap-6 md:w-3xl md:gap-10 lg:w-4xl ${ingredients.length === 0 && vibes.length === 0 ? "hidden" : ""}`}
    >
      <List inputList={ingredientsListItems} heading="Ingredients" />
      <List inputList={vibesListItems} heading="Vibes" />
    </section>
  );
}

interface ListProps {
  inputList: JSX.Element[];
  heading: "Ingredients" | "Vibes";
}

function List({ inputList, heading }: ListProps) {
  return (
    <div className="w-full rounded-md border-3 border-accent bg-list-background px-6 py-4 sm:px-8 sm:py-5 md:w-lg">
      <h2 className="pb-1 text-xl font-bold sm:text-2xl">{heading}</h2>
      <WavyDivider />
      <ul className="mt-3 space-y-2 indent-2 font-semibold capitalize sm:text-lg">
        {inputList}
      </ul>
    </div>
  );
}
