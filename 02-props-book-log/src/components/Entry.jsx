import StarRating from "./StarRating";
import EntryText from "./EntryText";
import bookIcon from "@assets/book-icon2.svg";
import goodreadsIcon from "@assets/social/goodreads.png";

export default function Entry({ book }) {
  const { cover, author, year, title, rating, datesRead, thoughts, goodreads } =
    book;

  return (
    <article className="mx-auto flex h-full max-w-125 flex-col items-center justify-center gap-8.5 border-b border-gray-200 px-3.5 py-8.75 hyphens-auto sm:px-8 md:max-w-187 md:flex-row md:items-start md:gap-7.25 md:px-3">
      {/* Cover image container */}
      <div className="cover-container mt-0 aspect-[2/3] w-58 shrink-0 overflow-hidden rounded-xl shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)] md:mt-1.25 md:w-45">
        <img
          className="h-full w-full object-cover"
          src={cover.src}
          alt={cover.alt}
        />
      </div>

      {/* Book info container */}
      <section>
        <div className="mb-2.5 leading-[1.25]">
          <img
            className="mr-1.75 inline h-4.5"
            src={bookIcon}
            alt="Book icon"
          />
          <span className="align-middle font-montserrat-alt text-base tracking-[0.16rem] md:text-[0.9rem] md:tracking-[0.19rem]">
            {author}, {year}
          </span>
        </div>
        <h2 className="mb-6 font-montserrat text-3xl leading-[1.25] font-bold text-pretty md:text-[2.2rem]">
          {title}
        </h2>
        <StarRating rating={rating} />
        <div className="mb-2.5 flex gap-2.5">
          <span className="text-base font-medium">{datesRead}</span>
          <a
            className="size-5 translate-y-0.5 rounded-md"
            href={goodreads}
            target="_blank"
          >
            <img
              className="transition-filter inset-0 size-full rounded-md object-cover duration-300 hover:drop-shadow-[0_0_0.15em_#77440f]"
              src={goodreadsIcon}
              alt="Goodreads icon"
            />
          </a>
        </div>
        <EntryText thoughts={thoughts} />
      </section>
    </article>
  );
}
