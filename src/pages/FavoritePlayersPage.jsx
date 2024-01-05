import { PlayerInfo } from "../components/PlayerInfo";
import { usePlayersStore } from "../store/players";
import { useSEO } from "../hooks/useSEO";

export function FavoritePlayersPage() {
  useSEO({
    title: "Favorite Player",
    img: "../src/assets/MyFavorite-basketball-player-min.png",
  });

  const playersLiked = usePlayersStore((state) => state.playersLiked);

  return (
    <div className="info-contaier">
      <h1>Your Favorite Players</h1>
      {playersLiked.length === 0 ? (
        <>
          <h2 style={{ color: "black" }}>
            You haven't chosen any favorite players yet
          </h2>
          <img
            src="src\assets\basketballFavorite-player-min.png"
            alt="Player logo"
            width={100}
          />
        </>
      ) : (
        <main className="searchPlayer-main-container">
          {playersLiked.map((favoritePlayer) => (
            <li key={favoritePlayer.id} className="searchPlayers-li-container">
              <article>
                <PlayerInfo type={"NBA debut"} playerInfo={favoritePlayer} />
              </article>
            </li>
          ))}
        </main>
      )}
    </div>
  );
}
