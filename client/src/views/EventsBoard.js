import React from "react";
import useEventsQuery from "../queries/useEventsQuery";
import Scoreboard from "../components/Scoreboard";
import OaksScoreboard from "../components/OaksScoreboard";
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
      {event && event !== "oaks" && (
        <Scoreboard eventName={event} setEvent={setEvent} />
      )}
      {event === "oaks" && (
        <OaksScoreboard eventName={event} setEvent={setEvent} />
      )}
      <h3>Pick an event and view the scoreboard: </h3>
      {!event && <EventPicker setEvent={setEvent} />}
    </div>
  );
}

export default EventsBoard;
