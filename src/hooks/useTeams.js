import { useQuery } from "react-query";
import { getTeams } from "../services/nbaFetching";

export function useTeams() {
  const { data, isError, isLoading } = useQuery(["teams"], getTeams);

  return { data, isError, isLoading };
}
