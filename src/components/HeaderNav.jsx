import { Tooltip } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const HomelinkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export function HeaderNav() {
  return (
    <>
      <header className="header-nav">
        <button>
          <Link style={linkStyle} to={"/Teams"}>
            Teams
          </Link>
        </button>

        <button>
          <Link style={linkStyle} to={"/SearchPlayer"}>
            Search Player
          </Link>
        </button>

        <button>
          <Link style={linkStyle} to={"/Standings"}>
            Standings
          </Link>
        </button>

        <button>
          <Link style={HomelinkStyle} to={"/"}>
            <Tooltip title="Home">
              <img width={40} src="src\assets\talk-min.png" alt="Home icon" />
            </Tooltip>
          </Link>
        </button>

        <button>
          <Link style={linkStyle} to={"/Seasons"}>
            Seasons
          </Link>
        </button>

        <button>
          <Link style={linkStyle} to={"/Leagues"}>
            Leagues
          </Link>
        </button>

        <button>
          <Link style={linkStyle} to={"/FavoritePlayers"}>
            My favorite players
          </Link>
        </button>
      </header>
      <Outlet />
    </>
  );
}
