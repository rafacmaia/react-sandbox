import libraryLogo from "../assets/person.svg";

export default function Header() {
  return (
    <header class="flex h-19 w-screen items-center justify-center gap-4 bg-[#f55a5a] text-white">
      <img src={libraryLogo} className="h-13" alt="Books logo" />
      <h1 className="text-2xl font-medium">my book log</h1>
    </header>
  );
}

//bg-[#f55a5a]
