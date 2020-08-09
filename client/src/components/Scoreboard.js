import React from "react";
import { nanoid } from "nanoid";
import { allPlayersDrafted } from "../helpers/draftData";
import useAllGolfers from "../queries/useAllGolfers";
import useFilterPlayers from "../helpers/useFilterPlayers";

export default function Scoreboard() {
  const eventQuery = useAllGolfers();
  const eventPlayers = eventQuery?.data.events[0].players;
  const filteredResults = useFilterPlayers(eventPlayers, allPlayersDrafted);
  // console.log("Scoreboard -> filteredResults", filteredResults);

  return eventQuery.isLoading ? (
    "loading"
  ) : eventQuery.isError ? (
    "error"
  ) : filteredResults ? (
    <>
      <h4>Scoreboard:</h4>
      <ul className='league-scoreboard'>
        <h5>{eventQuery.data.events[0].name}</h5>
        {filteredResults.map((golfer) => {
          return (
            <div key={nanoid()} className='round-details-horizontal'>
              <div className='main-details'>
                <h5>
                  {golfer.status} {golfer.name} {golfer.score}
                </h5>
                <p>total: {golfer.strokes}</p>
                <p>
                  today: {golfer.today || "__"} thru: {golfer.hole || "__"}
                </p>
              </div>
              <div className='round-details-vert'>
                <p>R1: {golfer.rounds[0]}</p>
                <p>R2: {golfer.rounds[1]}</p>
                <p>R3: {golfer.rounds[2]}</p>
                <p>R4: {golfer.rounds[3]}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  ) : (
    `most recent golf data is ${eventQuery.data.events[0].name}`
  );
}
