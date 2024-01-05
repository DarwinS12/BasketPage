import { useQuery } from "react-query";
import { getLeagues } from "../services/nbaFetching";

export function useLeagues() {
  const { data, isLoading, isError } = useQuery(["Leagues"], getLeagues);

  return { data, isLoading, isError };
}
