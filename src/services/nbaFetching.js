const apiKey = import.meta.env.VITE_X_RAPID_API_KEY;

export const getTeams = async () => {
  try {
    const response = await fetch("http://localhost:5173/datos.json");
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export const getStatistics = async (teamId) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/teams/statistics?id=${teamId}&season=2020`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export const getTeamPlayers = async (teamId) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/players?team=${teamId}&season=2021`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchPlayers = async (playerName) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/players?search=${playerName}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error();
  }
};

export const getStandings = async ({ season, conference }) => {
  try {
    const response = await fetch(
      `https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=${season}&conference=${conference}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-nba-v1.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export const getSeasons = async () => {
  try {
    const response = await fetch("http://localhost:5173/seasons.json");
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};

export const getLeagues = async () => {
  try {
    const response = await fetch("http://localhost:5173/leagues.json");
    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error(error);
  }
};
