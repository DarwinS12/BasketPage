import { SongDuration } from "./SongDuration";
import { CurrentSong } from "./CurrentSong";
import { ButtonsControler } from "./ButtonsControler";

import { VolumeControler } from "./VolumeControler";

export function Music({ // siempre es bueno que definas el tipo de las propiedades, asi evitas errores, aca estan como any, pero es bueno que si es string las definas tipo string o si es entero etc
  songRef,
  currentSong,
  songToPlay,
  handleNextSong,
  handlePrevSong,
  handlePlaySong,
}) {
  return (
    <div className="container-Music">
      <div className="header-mainContainer">
        <CurrentSong {...currentSong[songToPlay - 1]} />

        <ButtonsControler
          handleNextSong={handleNextSong}
          handlePlaySong={handlePlaySong}
          handlePrevSong={handlePrevSong}
        />
      </div>

      <footer>
        <div>
          <SongDuration audio={songRef} />
        </div>

        <VolumeControler songRef={songRef} />
      </footer>
    </div>
  );
}
