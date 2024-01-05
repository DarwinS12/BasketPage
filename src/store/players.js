import { create } from "zustand";

export const usePlayersStore = create((set, get) => ({
  playersLiked: [],

  isPlayerLiked: {},

  setPlayerLiked: (player) => {
    const { playersLiked, isPlayerLiked } = get();
    const playerIndex = playersLiked.find(
      (newPlayer) => newPlayer.id === player.id
    );
    const playerFiltered = playersLiked.filter(
      (newPlayer) => newPlayer.id !== player.id
    );

    if (!playerIndex) {
      set((state) => ({
        playersLiked: [
          ...state.playersLiked,
          {
            ...player,
          },
        ],
        isPlayerLiked: { ...state.isPlayerLiked, [player.id]: true },
      }));
    } else {
      set((state) => ({
        playersLiked: playerFiltered,
        isPlayerLiked: { ...state.isPlayerLiked, [player.id]: false },
      }));
    }
  },
}));
