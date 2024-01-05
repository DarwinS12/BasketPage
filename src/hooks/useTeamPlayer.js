import { useQuery } from "react-query";
import { getTeamPlayers } from "../services/nbaFetching";

export function useTeamPlayer(teamId) {
  const { data, isError, isLoading } = useQuery(
    ["Team Players", { teamId: teamId }],
    () => getTeamPlayers(teamId)
  );

  return { data, isError, isLoading };
}
