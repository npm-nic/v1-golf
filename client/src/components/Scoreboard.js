import React from "react";
import { nanoid } from "nanoid";
import useEventsQuery from "../queries/useEventsQuery";
import { useEventDetails } from "../helpers/useEventDetails";
import ScoreboardDetails from "./ScoreboardDetails";
// import EventScoreboard from "./EventScoreboard";

export default function Scoreboard({ eventName, setEvent }) {
  const eventsQuery = useEventsQuery();

  // [1]
  const eventDetails = useEventDetails(eventsQuery, eventName);
  const playersDetails = eventDetails.players;
  // console.log("Scoreboard -> eventDetails", eventDetails);

  return eventsQuery.isLoading ? (
    "loading"
  ) : eventsQuery.isError ? (
    "error"
  ) : (
    // <EventScoreboard event={eventDetails} setEvent={setEvent} />
    <ul className='league-scoreboard container'>
      <div className='scoreboard-close' onClick={() => setEvent("")}>
        <span>❌</span>
      </div>
      <p>{eventDetails.name}</p>
      <ScoreboardDetails eventName={eventName} />
    </ul>
  );
}
