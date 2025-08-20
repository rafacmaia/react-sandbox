export default function Footer() {
  return (
    <footer className="w-screen p-4 text-center text-primary/75">
      <hr className="m-auto mb-4 w-3/4 border-primary opacity-30" />
      <small className="font-gaegu">
        Built by cats & humans at{" "}
        <a
          className="cursor-pointer font-bold hover:text-primary/100 active:text-primary/100"
          href="https://github.com/rafacmaia"
          target="_blank"
          rel="noopener"
        >
          Zou Labs 🐈
        </a>
        <span className={`mx-2 hidden font-black sm:inline`}>·</span>
        &copy; {new Date().getFullYear()} Licensed under MIT.
      </small>
    </footer>
  );
}
