import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { TeamsPage } from "../pages/TeamsPage";
import { SearchPlayerPage } from "../pages/SearchPlayerPage";
import { StandingsPage } from "../pages/StandingsPage";
import { SeasonsPage } from "../pages/SeasonsPage";
import { LeaguesPage } from "../pages/LeaguesPage";
import { FavoritePlayersPage } from "../pages/FavoritePlayersPage";
import { HeaderNav } from "../components/HeaderNav";
import { StatisticsPage } from "../pages/StatisticsPage";
import { TeamsPlayersPage } from "../pages/TeamPlayersPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<HeaderNav />}>
        <Route path="Teams" element={<TeamsPage />} />
        <Route path="SearchPlayer" element={<SearchPlayerPage />} />
        <Route path="Standings" element={<StandingsPage />} />
        <Route path="Seasons" element={<SeasonsPage />} />
        <Route path="Leagues" element={<LeaguesPage />} />
        <Route path="Statistics/:id" element={<StatisticsPage />} />
        <Route path="TeamPlayers/:id" element={<TeamsPlayersPage />} />
        <Route path="FavoritePlayers" element={<FavoritePlayersPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
