import React from "react";
import { nanoid } from "nanoid";
import { allPlayersDrafted } from "../helpers/draftData";
import useAllGolfers from "../queries/useAllGolfers";
import useFilterPlayers from "../helpers/useFilterPlayers";

export default function Scoreboard() {
  const eventQuery = useAllGolfers();
  const filteredResults = useFilterPlayers(eventQuery, allPlayersDrafted);

  return eventQuery.isLoading ? (
    "loading"
  ) : eventQuery.isError ? (
    "error"
  ) : filteredResults ? (
    <ul className='league-scoreboard'>
      {eventQuery.isLoading && "..."}
      {filteredResults.map((user) => {
        return (
          <div key={nanoid()}>
            <div className='main-details'>
              <h5>
                {user.status} {user.name} {user.score}
              </h5>
              <p>total: {user.strokes}</p>
              <p>
                today: {user.today || "__"} thru: {user.hole || "__"}
              </p>
            </div>
            <div className='round-details-vert'>
              <p>round 1: {user.rounds[0]}</p>
              <p>round 2: {user.rounds[1]}</p>
              <p>round 3: {user.rounds[2]}</p>
              <p>round 4: {user.rounds[3]}</p>
            </div>
          </div>
        );
      })}
    </ul>
  ) : (
    "idk where the player data went -- text nic"
  );
}
