import { SongDuration } from "./SongDuration";
import { CurrentSong } from "./CurrentSong";
import { ButtonsControler } from "./ButtonsControler";
import { VolumeControler } from "./VolumeControler";

export function Music({
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
