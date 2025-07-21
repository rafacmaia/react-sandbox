import Header from './components/Header';
import Entry from './components/Entry.jsx';
import Footer from './components/Footer.jsx';
import bookData from './bookData.js';

export default function App() {
    const entryElements = bookData.map(book =>
        <Entry
            key={book.id}
            book={book}
        />
    );

    return (
        <>
            <Header/>
            <main>{entryElements}</main>
            <Footer/>
        </>);
}