import React from "react";
import { nanoid } from "nanoid";
import { whoDraftedWho } from "../helpers/draftData";
import useAllGolfers from "../queries/useEventsQuery";
import TeamCard from "./TeamCard";
import Scoreboard from "./Scoreboard";

function EventBoard() {
  const eventQuery = useAllGolfers();
  const eventPlayers = eventQuery?.data?.events[0].players;

  return eventQuery.isLoading ? (
    "loading"
  ) : eventQuery.isError ? (
    "error"
  ) : (
    <>
      {eventQuery.isLoading && "..."}
      <ul className='team-scoreboard'>
        {whoDraftedWho.map((team) => (
          <TeamCard team={team} players={eventPlayers} key={nanoid()} />
        ))}
      </ul>
      <Scoreboard />)
    </>
  );
}

export default EventBoard;
