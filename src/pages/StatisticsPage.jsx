import { useLocation } from "react-router-dom";
import { useStatistics } from "../hooks/useStatistics";
import { TeamStatistics } from "../components/TeamsStatistics";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { useSEO } from "../hooks/useSEO";

export function StatisticsPage() {
  const { state } = useLocation();
  useSEO({
    title: "Statistics",
    img: "../src/assets/statistics-min.png",
  });
  const { data: statistics, isError, isLoading } = useStatistics(state.teamId);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <p>Error loading Statistics.</p>;
  }

  return (
    <div className="statisticsTeam-container">
      <img
        src={state.teamLogo}
        alt=""
        width={80}
        style={{ marginTop: "16px" }}
      />
      <h1>statistics in season-2020 </h1>
      <main className="statisticsInfo">
        {statistics.map((statistic) => (
          <TeamStatistics key={statistic.fgp} statistic={statistic} />
        ))}
      </main>
    </div>
  );
}
