export default function Footer() {
  return (
    <footer className="w-screen p-4 text-center text-text/60">
      <small className="font-gaegu">
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="cursor-pointer font-bold hover:text-text/100 hover:opacity-100 active:text-text/100 active:opacity-100"
          href="https://github.com/rafacmaia"
          target="_blank"
          rel="noopener"
        >
          Zou Labs 🐈‍⬛
        </a>{" "}
        . All rights reserved.
      </small>
    </footer>
  );
}
