import libraryLogo from '../assets/person.svg';

export default function Header() {
    return (
        <header>
            <img src={libraryLogo} className="logo" alt="Books logo"/>
            <h1>my book log</h1>
        </header>
    );
}