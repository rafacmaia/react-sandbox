// noinspection JSValidateTypes
import StarRating from "./StarRating.jsx";
import EntryText from "./EntryText.jsx";
import bookIcon from "../assets/writer3.svg";
import goodreadsIcon from "../assets/goodreads.png";

export default function Entry({ book }) {
  const { cover, author, year, title, rating, datesRead, thoughts, goodreads } =
    book;

  return (
    <article className="flex h-full max-w-125 flex-col items-center justify-center gap-8.5 border-b border-gray-200 px-2 py-8.75 md:max-w-187 md:flex-row md:items-start md:gap-7.25 md:px-3">
      {/* Cover image container */}
      <div className="cover-container mt-0 h-90 w-60 shrink-0 overflow-hidden rounded-xl md:mt-1.25 md:h-68 md:w-45">
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
          <span className="font-montserrat-alt inline align-middle text-base tracking-[0.16rem] md:text-[0.9rem] md:tracking-[0.19rem]">
            {author}, {year}
          </span>
        </div>
        <h2 className="font-montserrat mb-6 text-3xl leading-[1.25] font-bold md:text-[2.2rem]">
          {title}
        </h2>
        <StarRating rating={rating} />
        <div className="mb-2 flex gap-2.5">
          <span className="text-base font-medium">{datesRead}</span>
          <a
            className="size-5 translate-y-0.5 rounded-md"
            href={goodreads}
            target="_blank"
          >
            <img
              className="transition-filter size-full rounded-md object-cover duration-300 hover:drop-shadow-[0_0_0.15em_#77440f]"
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
