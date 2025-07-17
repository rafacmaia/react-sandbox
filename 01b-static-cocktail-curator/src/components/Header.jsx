import cocktail from "../assets/cocktail.svg";

export default function Header() {
    return (
        <header className="header">
            <img className="logo" alt="React logo" src={cocktail}/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">Drinks Oracle</li>
                    <li className="nav-item">Shot Service</li>
                    <li className="nav-item">Boulette Bank</li>
                </ul>
            </nav>
        </header>
    )
}