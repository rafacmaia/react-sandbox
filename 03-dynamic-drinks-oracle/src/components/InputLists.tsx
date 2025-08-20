import { Sparkle, Cherry } from "lucide-react";
import type { ReactNode } from "react";
import WavyDivider from "./ui/WavyDivider";

interface InputListsProps {
  ingredients: string[];
  vibes: string[];
}

export default function InputLists({ ingredients, vibes }: InputListsProps) {
  return (
    <section
      className={`flex w-[85%] flex-row items-stretch justify-between gap-4 font-list sm:gap-12 sm:px-12 md:w-3xl lg:w-4xl ${ingredients.length === 0 && vibes.length === 0 ? "hidden" : ""}`}
    >
      <List heading="Ingredients">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="flex items-center gap-1 capitalize">
            <Cherry className="size-3 flex-shrink-0" strokeWidth={2} />
            <span>{ingredient}</span>
          </li>
        ))}
      </List>

      <List heading="Vibes">
        {vibes.map((vibe) => (
          <li key={vibe} className="flex items-center gap-1">
            <Sparkle className="size-3 flex-shrink-0" strokeWidth={2} />
            <span className={`first-letter:uppercase`}>{vibe}</span>
          </li>
        ))}
      </List>
    </section>
  );
}

interface ListProps {
  heading: "Ingredients" | "Vibes";
  children: ReactNode;
}

function List({ heading, children }: ListProps) {
  return (
    <div className="min-h-40 w-full rounded-md border-2 border-accent bg-yellow-100 px-4 py-4 sm:p-7 md:w-lg">
      <h2 className="pb-1 text-2xl font-black">{heading}</h2>
      <WavyDivider />
      <ul className="mt-5 ml-1 space-y-3 indent-2 font-semibold sm:text-lg">
        {children}
      </ul>
    </div>
  );
}
