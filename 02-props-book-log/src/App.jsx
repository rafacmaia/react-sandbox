import Header from './components/Header';
import Entry from './components/Entry.jsx';
import bookData from './bookData.js';

export default function App() {
    const entryElements = bookData.map(book =>
        <Entry
            cover={book.cover}
            title={book.title}
            author={book.author}
            year={book.year}
            rating={book.rating}
            goodreads={book.goodreads}
            datesRead={book.datesRead}
            thoughts={book.thoughts}
        />
    );

    return (
        <>
            <Header/>
            <main>{entryElements}</main>
        </>);
}