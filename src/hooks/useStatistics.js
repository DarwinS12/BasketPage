import { useQuery } from "react-query";
import { getStatistics } from "../services/nbaFetching";

export function useStatistics(teamId) {
  const { data, isError, isLoading } = useQuery(
    ["statistics", { teamId: teamId }],
    () => getStatistics(teamId)
  );

  return { data, isError, isLoading };
}
