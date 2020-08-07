import React from "react";
import { nanoid } from "nanoid";
import { whoDraftedWho } from "../helpers/draftData";
import useAllGolfers from "../queries/useAllGolfers";
import TeamCard from "./TeamCard";
import Scoreboard from "./Scoreboard";

function EventBoard() {
  const eventQuery = useAllGolfers();

  return eventQuery.isLoading ? (
    "loading"
  ) : eventQuery.isError ? (
    "error"
  ) : (
    <>
      {eventQuery.isLoading && "..."}

      <ul className='team-scoreboard'>
        {whoDraftedWho.map((team) => (
          <TeamCard team={team} key={nanoid()} />
        ))}
      </ul>
      <Scoreboard />
    </>
  );
}

export default EventBoard;
