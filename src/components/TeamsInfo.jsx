import { Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function TeamsInfo({ team }) {
  const navigate = useNavigate();

  const handleClickStatistics = ({ teamLogo, teamId }) => {
    navigate(`/Statistics/${teamId}`, {
      replace: false,
      state: {
        teamLogo,
        teamId,
      },
    });
  };

  const handleClickPlayers = ({ teamId, teamLogo }) => {
    navigate(`/TeamPlayers/${teamId}`, {
      replace: false,
      state: {
        teamLogo,
        teamId,
      },
    });
  };

  return (
    <>
      {team.logo === null ? (
        <img src="src\assets\basketballFavorite-player-min.png" width={120} />
      ) : (
        <img src={team.logo} alt="logo" width={120} />
      )}

      <h2>{team.name}</h2>
      <button
        className="btn-option btn-teams-option"
        onClick={() =>
          handleClickStatistics({
            teamLogo: team.logo,
            teamId: team.id,
          })
        }
      >
        <Tooltip title="Team statistics">
          <img
            src="src\assets\statistics-min.png"
            alt="Statistics icon"
            width={30}
          />
        </Tooltip>
      </button>
      <button
        className="btn-option btn-teams-option"
        onClick={() =>
          handleClickPlayers({ teamId: team.id, teamLogo: team.logo })
        }
      >
        <Tooltip title="Team Players">
          <img
            src="src\assets\basketball-player-min.png"
            alt="Player icon"
            width={30}
          />
        </Tooltip>
      </button>
    </>
  );
}
