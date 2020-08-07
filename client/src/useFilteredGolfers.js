import React from "react";

export default function useFilteredGolfers(golfers, desiredPlayers) {
  return golfers.data?.reduce((acc, cur) => {
    if (desiredPlayers.has(cur.name)) {
      if (!acc[cur.name]) {
        acc[cur.name] = { events: [], name: cur.name };
      }
      acc.push(cur);
    }
    return acc;
  }, []);
}
