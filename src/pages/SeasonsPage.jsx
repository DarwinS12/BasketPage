import { useSeason } from "../hooks/useSeason";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useSEO } from "../hooks/useSEO";

export function SeasonsPage() {
  useSEO({
    title: "Seasons",
    img: "../src/assets/schedule (1).png",
  });

  const { data: seasons, isError, isLoading } = useSeason();

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <h1>Error loading seasons</h1>;
  }

  return (
    <div className="info-contaier">
      <h1>Seasons</h1>
      <ul className="standings-main-container">
        {seasons.map((season) => (
          <li style={{ listStyle: "none" }} key={season}>
            <h1>{season}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
