export default function Footer() {
  return (
    <footer className="w-screen p-4 text-center text-primary/70">
      <hr className="m-auto mb-4 w-3/4 border-primary opacity-30" />
      <small className="font-gaegu">
        &copy; {new Date().getFullYear()}{" "}
        <a
          className="cursor-pointer font-bold hover:text-primary/100 active:text-primary/100"
          href="https://github.com/rafacmaia"
          target="_blank"
          rel="noopener"
        >
          Zou Labs 🐈
        </a>{" "}
        . All rights reserved.
      </small>
    </footer>
  );
}
