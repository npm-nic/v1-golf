import React from "react";
import useEventsQuery from "../queries/useEventsQuery";
import Scoreboard from "../components/Scoreboard";
import TheLeague from "../components/TheLeague";
import EventPicker from "../components/EventPicker";

function EventsBoard() {
  const [event, setEvent] = React.useState();
  const eventsQuery = useEventsQuery();

  return eventsQuery.isLoading ? (
    "loading"
  ) : eventsQuery.isError ? (
    "error"
  ) : (
    <div className='container'>
      {event && event !== "coldass" && (
        <Scoreboard eventName={event} setEvent={setEvent} />
      )}
      {event === "coldass" && (
        <TheLeague eventName={event} setEvent={setEvent} />
      )}
      <h3>Pick an event and view the scoreboard: </h3>
      {!event && <EventPicker setEvent={setEvent} />}
    </div>
  );
}

export default EventsBoard;
