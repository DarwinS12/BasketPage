import { create } from "zustand";

export const useMusicStore = create((set) => ({
  isPlaying: false,
  songToPlay: 1,
  currentSong: { songs: [] },
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentSong: (currentSong) => set({ currentSong }),
  setSongToPlay: (songToPlay) => set({ songToPlay }),
}));
