import { useLeagues } from "../hooks/useLeagues";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useSEO } from "../hooks/useSEO";

export function LeaguesPage() {
  useSEO({
    title: "Leagues",
    img: "../src/assets/leagues-min.png",
  });

  const { data: leagues, isLoading, isError } = useLeagues();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <h1>Error loading leagues</h1>;
  }

  return (
    <div className="info-contaier">
      <h1>Leagues</h1>
      <ul className="standings-main-container">
        {leagues.map((league) => (
          <li style={{ listStyle: "none" }} key={league}>
            <h1>{league}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
