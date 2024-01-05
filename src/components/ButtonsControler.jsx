import {
  IoPlaySkipBackOutline,
  IoPlayOutline,
  IoPlaySkipForwardOutline,
  IoPauseOutline,
} from "react-icons/io5";
import { useMusicStore } from "../store/music";

export function ButtonsControler({ handlePlaySong }) {
  const { isPlaying, songToPlay, setSongToPlay, setIsPlaying } = useMusicStore(
    (state) => state
  );

  const handleNextSong = () => {
    if (songToPlay < 3) {
      setSongToPlay(songToPlay + 1);
      setIsPlaying(false);
    }
  };

  const handlePrevSong = () => {
    if (songToPlay > 1 && songToPlay <= 3) {
      setSongToPlay(songToPlay - 1);
      setIsPlaying(false);
    }
  };

  return (
    <main>
      <button
        className="buttonOutline"
        disabled={songToPlay === 1}
        onClick={handlePrevSong}
      >
        <IoPlaySkipBackOutline size={25} />
      </button>

      <button className="buttonOutline" onClick={handlePlaySong}>
        {isPlaying ? <IoPauseOutline size={25} /> : <IoPlayOutline size={25} />}
      </button>

      <button
        className="buttonOutline"
        disabled={songToPlay === 3}
        onClick={handleNextSong}
      >
        <IoPlaySkipForwardOutline size={25} />
      </button>
    </main>
  );
}
