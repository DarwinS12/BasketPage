import { Link } from "react-router-dom";
import { useSEO } from "../hooks/useSEO";

export function HomePage() {
  useSEO({
    title: "Home",
    img: "../src/assets/NBA-logo-min.png",
  });

  return (
    <div className="homePage-container">
      <article>
        <button className="btn-option">
          <Link to={"/Teams"}>
            <img src="src\assets\NBA-logo-min.png" alt="NBA logo" width={100} />
          </Link>
        </button>
        <h1>Teams</h1>
      </article>

      <article>
        <button className="btn-option">
          <Link to={"/SearchPlayer"}>
            <img
              src="src\assets\basketball-player-min.png"
              alt="Player icon"
              width={100}
            />
          </Link>
        </button>
        <h1>Search Player</h1>
      </article>

      <article>
        <button className="btn-option">
          <Link to={"/Standings"}>
            <img
              src="src\assets\standings-min.png"
              alt="NBA standings"
              width={100}
            />
          </Link>
        </button>
        <h1>Standings</h1>
      </article>

      <article>
        <button className="btn-option">
          <Link to={"/Seasons"}>
            <img
              src="src\assets\schedule (1).png"
              alt="NBA seasons"
              width={100}
            />
          </Link>
        </button>
        <h1>Seasons</h1>
      </article>

      <article>
        <button className="btn-option">
          <Link to={"/Leagues"}>
            <img
              src="src\assets\leagues-min.png"
              alt="NBA leagues"
              width={100}
            />
          </Link>
        </button>
        <h1>Leagues</h1>
      </article>

      <article>
        <button className="btn-option">
          <Link to={"/FavoritePlayers"}>
            <img
              src="src\assets\MyFavorite-basketball-player-min.png"
              alt="My favorite player"
              width={100}
            />
          </Link>
        </button>
        <h1>My favorite players</h1>
      </article>
    </div>
  );
}
