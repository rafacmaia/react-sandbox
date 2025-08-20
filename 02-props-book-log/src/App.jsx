import Header from "@components/Header";
import Entry from "@components/Entry";
import Footer from "@components/Footer";
import bookData from "./data/bookData.js";

export default function App() {
  const entryElements = bookData.map((book) => (
    <Entry key={book.id} book={book} />
  ));

  return (
    <>
      <Header />
      <main className="w-screen grow px-5.25 pt-4 md:px-18 md:pt-12.75">
        <div className="h-full w-full flex-col items-center sm:grid sm:grid-cols-[repeat(auto-fit,_minmax(550px,_1fr))] sm:justify-items-center md:gap-x-10">
          {entryElements}
        </div>
      </main>
      <Footer />
    </>
  );
}
