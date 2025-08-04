import { useState } from "react";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";

export default function EntryText({ thoughts }) {
  const [expanded, setExpanded] = useState(false);

  const CHAR_LIMIT = 460;
  const CUTOFF_BUFFER = 25;
  const isLong = thoughts.length - CUTOFF_BUFFER > CHAR_LIMIT;

  function getVisibleText() {
    if (isLong && !expanded) {
      const cutoff = getCutoffIndex();
      return thoughts.slice(0, cutoff);
    } else {
      return thoughts;
    }
  }

  function getCutoffIndex() {
    let cutoff = CHAR_LIMIT - 1;
    while (thoughts[cutoff] !== " ") {
      cutoff--;
    }
    if (thoughts[cutoff - 1] === "," || thoughts[cutoff - 1] === ".") {
      cutoff--;
    }

    return cutoff;
  }

  const ToggleIcon = expanded ? CircleChevronUp : CircleChevronDown;

  return (
    <p className="max-w-xl leading-[1.35] font-normal hyphens-auto sm:font-light">
      {getVisibleText()}
      {isLong && (
        <>
          {!expanded && <span className="tracking-widest">...</span>}
          <button
            className="ml-1.25 cursor-pointer border-none bg-transparent hover:opacity-70"
            onClick={() => setExpanded(!expanded)}
            aria-label={expanded ? "Show less" : "Show more"}
          >
            <ToggleIcon
              size={13}
              color="#F55A5A"
              className="translate-y-[1px] rotate-330"
            />
          </button>
        </>
      )}
    </p>
  );
}
