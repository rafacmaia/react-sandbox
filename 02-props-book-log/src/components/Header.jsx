import Logo from "./icons/HeaderLogo";

export default function Header() {
  return (
    <header className="flex h-19 w-screen items-center justify-center gap-4 bg-primary text-background">
      <Logo
        className="size-13"
        alt="Logo of a mini-person sitting on a pile of two books"
      />
      <h1 className="text-2xl font-medium">my book log</h1>
    </header>
  );
}
