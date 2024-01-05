import { useState } from "react";
import { Box, Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import { useStandings } from "../hooks/useStandings";
import { SkeletonLoader } from "../components/SkeletonLoader";
import { StandingsInfo } from "../components/StandingsInfo";
import { useSEO } from "../hooks/useSEO";

export function StandingsPage() {
  useSEO({
    title: "Standings",
    img: "../src/assets/standings-min.png",
  });

  const [conference, setConference] = useState("East");
  const [season, setSeason] = useState("2021");
  const {
    data: standings,
    isError,
    isLoading,
  } = useStandings({ season: season, conference: conference });

  const handleSeasonChange = (e) => {
    setSeason(e.target.value);
  };

  const handleConferenceChange = (e) => {
    setConference(e.target.value);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  const sortedByRank = [...standings].sort((a, b) => {
    return a.conference.rank - b.conference.rank;
  });

  console.log(standings);

  return (
    <div className="info-contaier standing-container">
      <h1>
        Select the season and the conference you want to know the standings for
      </h1>

      <div className="select-container">
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel
              id="season-select-label"
              sx={{
                color: "black",
                "&.Mui-focused": {
                  color: "black",
                },
              }}
            >
              Season
            </InputLabel>
            <Select
              labelId="season-select-label"
              id="season-select"
              value={season}
              label="Season"
              className="custom-select"
              onChange={handleSeasonChange}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 160 }}>
          <FormControl fullWidth>
            <InputLabel
              id="conference-select-label"
              sx={{
                color: "black",
                "&.Mui-focused": {
                  color: "black",
                },
              }}
            >
              Conference
            </InputLabel>
            <Select
              labelId="conference-select-label"
              id="conference-select"
              value={conference}
              label="Conference"
              onChange={handleConferenceChange}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              <MenuItem value={"East"}>East</MenuItem>
              <MenuItem value={"West"}>West</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <main className="standings-main-container">
        {sortedByRank.map((standing) => (
          <StandingsInfo key={standing.team.id} standing={standing} />
        ))}
      </main>
    </div>
  );
}
