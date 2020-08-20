import React from "react";
import { nanoid } from "nanoid";
import useEventsQuery from "../queries/useEventsQuery";

export default function EventPicker({ setEvent }) {
  const eventsQuery = useEventsQuery();
  const events = eventsQuery?.data?.events;
  return (
    <ul className='event-picker'>
      <li
        className='event-picker-name container'
        key={nanoid()}
        onClick={() => setEvent("oaks")}
      >
        Oak's Fantasy Tourney
      </li>
      {events.map((event) => (
        <li
          className='event-picker-name container'
          key={nanoid()}
          onClick={() => setEvent(event.name)}
        >
          {event.name} | {event.tour}
        </li>
      ))}
    </ul>
  );
}
