import {
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
  IoVolumeMediumOutline,
} from "react-icons/io5";
import { Slider } from "@mui/material";
import { useRef, useState } from "react";

export function VolumeControler({ songRef }) {
  const [volume, setVolume] = useState(1);
  const previousVolumeRef = useRef();

  const isVolumeSilence = volume < 0.1;
  const isVolumeMedium = volume >= 0.1 && volume <= 0.5;
  const isVolumeHigh = volume > 0.5;

  const handleClickVolume = () => {
    if (isVolumeSilence) {
      setVolume(previousVolumeRef.current);
    } else {
      previousVolumeRef.current = volume;
      setVolume(0);
    }

    songRef.current.volume = isVolumeSilence ? previousVolumeRef.current : 0;
  };

  return (
    <div>
      <button className="buttonOutline" onClick={handleClickVolume}>
        {isVolumeSilence && <IoVolumeMuteOutline size={25} />}
        {isVolumeMedium && <IoVolumeMediumOutline size={25} />}
        {isVolumeHigh && <IoVolumeHighOutline size={25} />}
      </button>

      <Slider
        size="small"
        defaultValue={[100]}
        min={0}
        max={100}
        value={volume * 100}
        sx={{ width: "100px", color: "pink" }}
        onChange={(e) => {
          const newVolume = e.target.value;
          setVolume(newVolume / 100);
          songRef.current.volume = newVolume / 100;
        }}
      />
    </div>
  );
}
