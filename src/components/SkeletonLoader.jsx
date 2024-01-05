import Skeleton from '@mui/material/Skeleton';

export function SkeletonLoader ({width=800, height=428}) {
    return (
        <Skeleton variant="rectangular" width={width} height={height} sx={{backgroundColor: "rgba(143, 143, 143, 0.2)", borderRadius: "10px", marginBottom: "16px"}} />
    )
}