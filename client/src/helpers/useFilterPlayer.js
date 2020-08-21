const useFilterPlayers = (allPlayers, desiredPlayer) => {
  return allPlayers.find((player) => player.name === desiredPlayer);
};

export default useFilterPlayers;
