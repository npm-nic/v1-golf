import React from "react";
import { nanoid } from "nanoid";
import useEventsQuery from "../queries/useEventsQuery";
import { useEventDetails } from "../helpers/useEventDetails";
import useFilterPlayers from "../helpers/useFilterPlayers";
import { oaksPlayersDrafted } from "../helpers/draftData";
// import EventScoreboard from "./EventScoreboard";

export default function Scoreboard({ eventName, setEvent }) {
  const eventsQuery = useEventsQuery();

  if (eventName === "oaks") {
    eventName = "THE NORTHERN TRUST";
  }
  let eventDetails = useEventDetails(eventsQuery, eventName);
  eventDetails = useFilterPlayers(eventDetails.players, oaksPlayersDrafted);

  return eventsQuery.isLoading ? (
    "loading"
  ) : eventsQuery.isError ? (
    "error"
  ) : (
    <ul className='league-scoreboard container'>
      <div className='scoreboard-close' onClick={() => setEvent("")}>
        <span>❌</span>
      </div>
      {eventDetails.map((golfer) => {
        return (
          <div key={nanoid()} className='round-details-horizontal'>
            <div>
              <h5>
                {golfer.status} {golfer.name}
              </h5>
              <p>
                total: {golfer.score} today: {golfer.today || "__"} thru:{" "}
                {golfer.hole || "__"}
              </p>
              <br />
            </div>
            {/* <div className='round-details-vert'>
              <p>R1: {golfer.rounds[0]}</p>
              <p>R2: {golfer.rounds[1]}</p>
              <p>R3: {golfer.rounds[2]}</p>
              <p>R4: {golfer.rounds[3]}</p>
            </div> */}
          </div>
        );
      })}
    </ul>
  );
}
