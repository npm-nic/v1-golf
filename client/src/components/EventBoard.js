import React from "react";
import { nanoid } from "nanoid";
import { whoDraftedWho } from "../helpers/draftData";
import useAllGolfers from "../queries/useAllGolfers";
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
      <Scoreboard />
      {/* 
        <ul className='league-scoreboard'>
          <h5>{eventQuery.data.events[0].name}</h5>
          <div key={nanoid()} className='round-details-horizontal'>
            <div className='main-details'>
              <h5>T1 Dustin Johnson -6</h5>
              <p>total: ___</p>
              <p>today: __ thru: __</p>
            </div>
            <div className='round-details-vert'>
              <p>R1: 70 </p>
              <p>R2: 74</p>
              <p>R3: 67</p>
              <p>R4: 69</p>
            </div>
          </div> 
        </ul> 
      */}
      )
    </>
  );
}

export default EventBoard;
