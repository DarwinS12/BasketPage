import { Skeleton } from "@mui/material";
import { SkeletonLoader } from "./SkeletonLoader";

export function CurrentSong({ image, title, artists }) {
  return (
    <header>
      {image === undefined ? (
        <SkeletonLoader width={164} height={164} />
      ) : (
        <img src={image} alt="SongCover" width={164} height={164} />
      )}
      <div>
        {title === undefined ? (
          <>
            <SkeletonLoader width={80} height={20} />
            <SkeletonLoader width={60} height={20} />
          </>
        ) : (
          <>
            <h4>{title}</h4> <p>{artists}</p>
          </>
        )}
      </div>
    </header>
  );
}
