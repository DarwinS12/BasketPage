import { useTeams } from "../hooks/useTeams";
import { TeamsInfo } from "../components/TeamsInfo";
import { useSEO } from "../hooks/useSEO";

export function TeamsPage() {
  
  useSEO({
    title: "Teams",
    img: "../src/assets/NBA-logo-min.png",
  });
  const { data: teamsPage, isError, isLoading } = useTeams();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Error loading teams.</h1>;
  }

  return (
    <>
      <ul className="teams-list">
        {teamsPage.map((team) => (
          <li key={team.id} className="li-list">
            <article className="article-teams-info-container">
              <TeamsInfo team={team} />
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
