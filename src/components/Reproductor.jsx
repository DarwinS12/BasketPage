import { useState } from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Music } from "./Music";
import { useMusicStore } from "../store/music";

import { useRef } from "react";
import { songs } from "./data";

const style = {
  position: "absolute",
  top: "50%",
  color: "rgba(0, 0, 0, 0.8)",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "rgba(231, 231, 231, 0.1)",
  border: "none",
  borderRadius: "10px",
  p: 4,
  backdropFilter: "blur(1.5em)",
};

export function Reproductor() {
  const [open, setOpen] = useState(false);
  const { currentSong, isPlaying, songToPlay, setIsPlaying, setCurrentSong } =
    useMusicStore((state) => state);
  const songRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    songRef.current.src = `../src/music/1/0${songToPlay}.mp3`;
  }, [songToPlay]);

  const handlePlaySong = () => {
    if (isPlaying) { 
      songRef.current.pause();
      setIsPlaying(false); // cual es la razon para tener esta linea ?
    } else {
      songRef.current.play();
      setCurrentSong(songs);
      setIsPlaying(true); // cual es la razon para tener esta linea ?
    }

    setIsPlaying(!isPlaying); // esta linea cubre los dos escenarios, si isPlaying es falso, aqui lo establece como verdadero o vicerversa
  };

  return (
    <div className="iconVol">
      <div>
        <button className="btn-option" onClick={handleOpen}>
          <img src="src\assets\audio-min.png" alt="Audio logo" width={60} />
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal"
          disableScrollLock={true}
        >
          <Box sx={style}>
            <Music
              songRef={songRef}
              songToPlay={songToPlay}
              currentSong={currentSong}
              handlePlaySong={handlePlaySong}
            />
          </Box>
        </Modal>
      </div>
      <audio ref={songRef} />
    </div>
  );
}
