import React from "react";
import useEventsQuery from "../queries/useEventsQuery";
import { nanoid } from "nanoid";
import Scoreboard from "../components/Scoreboard";

function EventsBoard() {
  const [event, setEvent] = React.useState();
  const eventsQuery = useEventsQuery();

  return eventsQuery.isLoading ? (
    "loading"
  ) : eventsQuery.isError ? (
    "error"
  ) : (
    <div className='container'>
      <h3>Pick an event to view the scoreboard: </h3>
      <ul className='event-picker'>
        {eventsQuery?.data?.events?.map((event) => (
          <li
            className='event-name container'
            key={nanoid()}
            onClick={() => setEvent(event.name)}
          >
            {event.name} | {event.tour}
          </li>
        ))}
      </ul>
      {event && <Scoreboard event={event} setEvent={setEvent} />}
    </div>
  );
}

export default EventsBoard;
