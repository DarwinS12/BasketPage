import { useLocation } from "react-router-dom";
import { PlayerInfo } from "../components/PlayerInfo";
import { useTeamPlayer } from "../hooks/useTeamPlayer";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useSEO } from "../hooks/useSEO";

export function TeamsPlayersPage() {
  const { state } = useLocation();
  useSEO({
    title: "Team Players",
    img: "../src/assets/basketball-player-min.png",
  });

  const { data: teamPlayers, isError, isLoading } = useTeamPlayer(state.teamId);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <h1>Error loading players.</h1>;
  }

  return (
    <>
      <img
        src={state.teamLogo}
        alt="team logo"
        width={100}
        className="team-logo"
      />
      <ul className="resize teams-list">
        {teamPlayers.map((teamPlayer) => (
          <li className="li-list" key={teamPlayer.id}>
            <article className="article-teamPlayers-info">
              <PlayerInfo playerInfo={teamPlayer} />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
