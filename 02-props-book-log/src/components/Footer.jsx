export default function Footer() {
  return (
    <footer className="w-screen p-5 text-center text-text/60">
      <small className="font-gaegu leading-tight">
        Built by cats & humans at{" "}
        <a
          className="cursor-pointer font-bold hover:text-text/100 hover:opacity-100 active:text-text/100 active:opacity-100"
          href="https://github.com/rafacmaia"
          target="_blank"
          rel="noopener"
        >
          Zou Labs 🐈‍⬛
        </a>
        <span className={`mx-2 hidden font-black sm:inline`}>·</span>
        <br className="sm:hidden" />
        &copy; {new Date().getFullYear()} Licensed under MIT.
      </small>
    </footer>
  );
}
