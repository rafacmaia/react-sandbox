import { useState } from "react";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";

export default function EntryText({ thoughts }) {
  const [expanded, setExpanded] = useState(false);

  const CHAR_LIMIT = 475;
  const CUTOFF_BUFFER = 25;
  const isLong = thoughts.length - CUTOFF_BUFFER > CHAR_LIMIT;

  function getVisibleText() {
    if (isLong && !expanded) {
      const cutoff =
        thoughts[CHAR_LIMIT - 1] === " " ? CHAR_LIMIT - 1 : CHAR_LIMIT;
      return thoughts.slice(0, cutoff) + "...";
    } else {
      return thoughts;
    }
  }

  const ToggleIcon = expanded ? CircleChevronUp : CircleChevronDown;

  return (
    <p className="max-w-xl leading-[1.35] font-normal md:font-light">
      {getVisibleText()}
      {isLong && (
        <button
          className="ml-1.25 cursor-pointer border-none bg-transparent"
          onClick={() => setExpanded(!expanded)}
          aria-label={expanded ? "Show less" : "Show more"}
        >
          <ToggleIcon
            size={13}
            color="#F55A5A"
            className="translate-y-[1px] rotate-330"
          />
        </button>
      )}
    </p>
  );
}
