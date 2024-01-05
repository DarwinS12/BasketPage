import { useQuery } from "react-query";
import { getStandings } from "../services/nbaFetching";

export function useStandings({ season, conference }) {
  const { data, isError, isLoading } = useQuery(
    ["Standings", { season: season, conference: conference }],
    () => getStandings({ season, conference })
  );

  return { data, isError, isLoading };
}
