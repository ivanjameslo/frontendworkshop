import { IoMenuSharp } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <body>
        <main className="NavBar">
          <h1>Pokedex</h1>
          <IoMenuSharp />
        </main>
        <main className="Hero">
            <div>
                <img src="pokedex.png" alt="Pokedex" />
            </div>
            <div className="HeroText">
              <h1 className="Tagline">Catch 'Em All!</h1>
              <p className="HeroParagraph">Explore with Our Interactive Pokedex</p>
              <button className="HeroButton">View Pokedex</button>
            </div>
        </main>
      </body>
    </div>
  );
}
