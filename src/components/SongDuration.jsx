import { Slider } from "@mui/material";
import { useEffect, useState } from "react";

export function SongDuration({ audio }) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const currentAudio = audio.current;
    if (currentAudio) {
      currentAudio.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        currentAudio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current.currentTime);
  };

  const formatTime = (time) => {
    if (time == null || isNaN(time)) return "0:00";

    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const duration = audio?.current?.duration ?? 0;

  return (
    <>
      <span className="songDuration-span">{formatTime(currentTime)}</span>

      <Slider
        size="small"
        value={currentTime}
        min={0}
        max={duration || 0}
        sx={{
          width: "400px",
          color: "pink",
          "@media screen and (max-width: 768px)": {
            maxWidth: "50vw",
          },
        }}
        onChange={(e) => {
          const newCurrentTime = e.target.value;
          audio.current.currentTime = newCurrentTime;
        }}
      />
      <span className="songDuration-span">
        {duration ? formatTime(duration) : "0:00"}
      </span>
    </>
  );
}
