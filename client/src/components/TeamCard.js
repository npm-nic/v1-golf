import React from "react";
import useAllGolfers from "../queries/useAllGolfers";
import useFilterPlayers from "../helpers/useFilterPlayers";
import { nanoid } from "nanoid";

const TeamCard = ({ team }) => {
  const allGolfers = useAllGolfers();
  const myGolfers = useFilterPlayers(allGolfers, team);
  return (
    <div className='my-scorecard'>
      {myGolfers.map((golfer) => {
        return (
          <div className='round-details-horizontal' key={nanoid()}>
            <h5>
              {golfer.status} {golfer.name}
            </h5>
            <div className='round-scores'>
              <span>{golfer.rounds[0] || "__"}</span>
              <span>{golfer.rounds[1] || "__"}</span>
              <span>{golfer.rounds[2] || "__"}</span>
              <span>{golfer.rounds[3] || "__"}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamCard;
