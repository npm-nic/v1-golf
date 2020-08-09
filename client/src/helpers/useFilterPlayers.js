const useFilterPlayers = (allPlayers, desiredPlayers) => {
  return allPlayers.reduce((acc, cur) => {
    if (desiredPlayers.has(cur.name)) {
      acc.push(cur);
    }
    return acc;
  }, []);
};

export default useFilterPlayers;
