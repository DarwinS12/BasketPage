import { useQuery } from "react-query";
import { getSearchPlayers } from "../services/nbaFetching";

export function useSearchPlayer(playerName) {
  const { data, isError, isLoading } = useQuery(
    ["Search Player", { playerName: playerName }],
    () => getSearchPlayers(playerName),
    { refetchOnWindowFocus: false }
  );

  return { data, isError, isLoading };
}
