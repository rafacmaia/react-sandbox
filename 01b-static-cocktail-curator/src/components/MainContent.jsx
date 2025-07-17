import nick from "../assets/nick.png";

export default function MainContent() {
    return (
        <main className="main">
            <img className="howie" src={nick} alt="Greedy Howie"/>
            <h1>Cocktail Curator</h1>
            <h2>On the menu:</h2>
            <ul className="menu">
                <li className="drink">
                    Martini - sharp, cold, no-nonsense, Miranda
                </li>
                <li className="drink">Last Word - strong, nuanced, Carrie</li>
                <li className="drink">Mai Tai - sweeter, fruitier, Charlotte
                </li>
                <li className="drink">
                    Old Fashioned - velvety, strong comfort, Samantha
                </li>
                <li className="drink">Negroni - classic bitter sweetness</li>
            </ul>
        </main>
    )
}
