import "./App.css";
import { Reproductor } from "./components/Reproductor";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <AppRouter />
      <Reproductor />
    </>
  );
}

export default App;
