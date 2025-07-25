import Header from "./components/Header";
import Entry from "./components/Entry.jsx";
import Footer from "./components/Footer.jsx";
import bookData from "./bookData.js";

export default function App() {
  const entryElements = bookData
    .filter((book) => book.id > 1)
    .map((book) => <Entry key={book.id} book={book} />);

  return (
    <>
      <Header />
      <main className="w-screen grow px-5 py-3.75 md:px-18 md:pt-13.25 md:pb-6">
        <div className="h-full w-full flex-col items-center md:grid md:grid-cols-[repeat(auto-fit,_minmax(550px,_1fr))] md:justify-items-center md:gap-x-10">
          {entryElements}
        </div>
      </main>
      <Footer />
    </>
  );
}
