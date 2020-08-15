import React from "react";
import useEventsQuery from "../queries/useEventsQuery";
import { nanoid } from "nanoid";
import Scoreboard from "../components/Scoreboard";

function EventsBoard() {
  const [event, setEvent] = React.useState();
  // const [show, setShow] = React.useReducer(false)
  const eventsQuery = useEventsQuery();

  return (
    <>
      <h3>Choose Event</h3>
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
      {event && <Scoreboard event={event} />}
    </>
  );
}

export default EventsBoard;
