export default function Footer() {
  return (
    <footer className="w-screen p-4 text-center text-primary/75">
      <hr className="m-auto mb-4 w-11/12 border-primary opacity-30 sm:w-2/5" />
      <small className="font-gaegu">
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="cursor-pointer font-bold hover:text-primary/100 active:text-primary/100"
          href="https://github.com/rafacmaia"
          target="_blank"
          rel="noopener"
        >
          Zou Labs 🐈
        </a>
        <span className={`mx-2 font-black`}>·</span>
        Licensed under MIT.
      </small>
    </footer>
  );
}
