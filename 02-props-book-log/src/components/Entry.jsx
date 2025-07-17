// noinspection JSValidateTypes

import book from '../assets/book.svg';
import goodreadsIcon from '../assets/goodreads.svg';
import star from '../assets/star.svg';
import halfStar from '../assets/half-star.svg';
import emptyStar from '../assets/empty-star.svg';

export default function Entry({
                                  cover,
                                  author,
                                  year,
                                  title,
                                  rating,
                                  datesRead,
                                  goodreads,
                                  thoughts
                              }) {
    const stars = [];

    while (rating >= 1) {
        stars.push(<img src={star} alt="Star rating icon"/>);
        rating--;
    }
    if (rating % 1 === 0.5) {
        stars.push(<img src={halfStar} alt="Half-star rating icon"/>);
    }
    while (stars.length < 5) {
        stars.push(<img src={emptyStar} alt="Empty star rating icon"/>);
    }

    return (
        <article className="book-entry">
            <div className="cover-container">
                <img className="book-cover" src={cover.src} alt={cover.alt}/>
            </div>
            <section className="entry-info">
                <div className="author-section">
                    <img className="book-icon" src={book} alt="Book icon"/>
                    <span className="author">{author}, {year}</span>
                </div>
                <h2 className="title">{title}</h2>
                <div className="rating">{stars}</div>
                <span className="dates">{datesRead}</span>
                <a href={goodreads} target="_blank">
                    <img className="goodreads" src={goodreadsIcon} alt="Goodreads icon"/>
                </a>
                <p className="thoughts">{thoughts}</p>
            </section>
        </article>
    );
}