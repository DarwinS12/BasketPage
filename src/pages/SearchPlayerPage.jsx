import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useSearchPlayer } from "../hooks/useSearchPlayer";
import { PlayerInfo } from "../components/PlayerInfo";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useSEO } from "../hooks/useSEO";

export function SearchPlayerPage() {
  useSEO({
    title: "Search Player",
    img: "../src/assets/basketball-player-min.png",
  });
  const [searchForPlayers, setSearchForPlayers] = useState("");

  const debouncedSearchPlayer = useDebounce(searchForPlayers, 200);

  const {
    data: searchedPlayers,
    isError,
    isLoading,
  } = useSearchPlayer(debouncedSearchPlayer);

  const handleSearchPlayers = (e) => {
    setSearchForPlayers(e.target.value);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <h1>Error loading Players.</h1>;
  }

  return (
    <div className="info-contaier">
      <h1>Look for a player</h1>
      <input
        placeholder="Ja Morant"
        type="text"
        onChange={handleSearchPlayers}
        data-testid="search-input"
      />
      <main
        className={
          debouncedSearchPlayer && searchedPlayers?.length === 0
            ? ""
            : `searchPlayer-main-container`
        }
      >
        {debouncedSearchPlayer && searchedPlayers?.length === 0 ? (
          <article className="noFound-container">
            <img
              src="src\assets\basketball-player-min.png"
              alt="Player icon"
              width={100}
            />
            <h1>No Players Found</h1>
          </article>
        ) : (
          searchedPlayers?.map((searchedPlayer) => (
            <li key={searchedPlayer.id} className="searchPlayers-li-container">
              <article>
                <PlayerInfo type={"NBA debut"} playerInfo={searchedPlayer} />
              </article>
            </li>
          ))
        )}
      </main>
    </div>
  );
}
