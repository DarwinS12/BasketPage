import { useQuery } from "react-query";
import { getSeasons } from "../services/nbaFetching";

export function useSeason() {
  const { data, isError, isLoading } = useQuery(["Seasons"], getSeasons);

  return { data, isError, isLoading };
}
