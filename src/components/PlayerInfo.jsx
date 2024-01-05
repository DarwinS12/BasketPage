import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { Checkbox, Box, Tooltip } from "@mui/material";
import { usePlayersStore } from "../store/players";

export function PlayerInfo({ type, playerInfo }) {

  const setPlayerLiked = usePlayersStore((state) => state.setPlayerLiked)
  const isPlayerLiked = usePlayersStore((state) => state.isPlayerLiked)


  const handleClick = (player) => {
    setPlayerLiked(player)
  }
  
  return (
    <>
      <h2>
        {playerInfo.firstname} {playerInfo.lastname}
      </h2>
      <section className="section-info">
        <h3>
          Height: <span>{playerInfo.height.meters}</span>
        </h3>
        <h3>
          Weight: <span>{playerInfo.weight.kilograms}</span>
        </h3>
      </section>
      <section className="section-info">
        <h3>
          Birthday: <span>{playerInfo.birth.date}</span>
        </h3>
        <h3>
          Country: <span>{playerInfo.birth.country}</span>
        </h3>
      </section>
      {type === "NBA debut" && <h3>NBA Debut: {playerInfo.nba.start}</h3>}
      <Tooltip title="Add to my favorite players">
        <Box className="img-like">
          <Checkbox
            onChange={()=> handleClick(playerInfo)}
            color="error"
            checked={isPlayerLiked[playerInfo.id] === true}
            icon={<IoHeartOutline color="#ec200a" size={24} />}
            checkedIcon={<IoHeartSharp size={24} />}
          />
        </Box>
      </Tooltip>
    </>
  );
}
