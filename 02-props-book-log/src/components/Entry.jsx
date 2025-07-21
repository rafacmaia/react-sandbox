// noinspection JSValidateTypes
import StarRating from './StarRating.jsx';
import EntryText from './EntryText.jsx';
import bookIcon from '../assets/book.svg';
import goodreadsIcon from '../assets/goodreads.svg';

export default function Entry({book}) {
    const {cover, author, year, title, rating, datesRead, thoughts, goodreads} = book;

    return (
        <article className="book-entry">
            <div className="cover-container">
                <img className="book-cover" src={cover.src} alt={cover.alt}/>
            </div>
            <section className="entry-info">
                <div className="author-section">
                    <img className="book-icon" src={bookIcon} alt="Book icon"/>
                    <span className="author">{author}, {year}</span>
                </div>
                <h2 className="title">{title}</h2>
                <StarRating rating={rating}/>
                <span className="dates">{datesRead}</span>
                <a href={goodreads} target="_blank">
                    <img className="goodreads" src={goodreadsIcon} alt="Goodreads icon"/>
                </a>
                <EntryText thoughts={thoughts}/>
            </section>
        </article>
    );
}