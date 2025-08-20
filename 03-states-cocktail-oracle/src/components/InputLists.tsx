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
      className={`flex w-[88%] items-stretch justify-between gap-4 font-list sm:gap-12 sm:px-12 md:w-3xl lg:w-4xl ${ingredients.length === 0 && vibes.length === 0 ? "hidden" : ""}`}
    >
      <List heading="Ingredients">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="flex items-center gap-1 capitalize">
            <Cherry className="mr-2 size-3 flex-shrink-0" strokeWidth={2} />
            <span>{ingredient}</span>
          </li>
        ))}
      </List>

      <List heading="Vibes">
        {vibes.map((vibe) => (
          <li key={vibe} className="flex items-center gap-1">
            <Sparkle className="mr-2 size-3 flex-shrink-0" strokeWidth={2} />
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
    <div className="w-full rounded-md border-2 border-accent bg-yellow-100 p-5 sm:p-6 md:w-lg">
      <h2 className="pb-1 text-xl font-black sm:text-2xl">{heading}</h2>
      <WavyDivider />
      <ul className="mt-3 ml-1 space-y-3 font-semibold sm:mt-5 sm:text-lg">
        {children}
      </ul>
    </div>
  );
}
