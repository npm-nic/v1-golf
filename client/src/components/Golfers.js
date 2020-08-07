import React from "react";
import { nanoid } from "nanoid";

import useAllGolfers from "../queries/useAllGolfers";

export default function Golfers() {
  const golfers = useAllGolfers();
  const desiredPlayers = new Set([
    "Brooks Koepka",
    "Bryson Dechambeau",
    "Justin Thomas",
    "Xander Schauffele",
    "Dustin Johnson",
    "Jon Rahm",
    "Rory Mcilroy",
    "Jordan Spieth",
    "Patrick Cantlay",
    "Tiger Woods",
    "Rickie Fowler",
    "Webb Simpson",
    "Jason Day",
    "Collin Morikawa",
    "Viktor Hovland",
    "Justin Rose",
    "Tony Finau",
    "Tommy Fleetwood",
    "Gary Woodland",
    "Patrick Reed",
    "Adam Scott",
    "Sergio Garcia",
    "Phil Mickelson",
    "Matthew Fitzpatrick",
    "Shane Lowry",
    "Louis Oosthuizen",
    "Daniel Berger",
    "Marc Leishman",
    "Abraham Ancer",
    "Cameron Champ",
    "Lucas Glover",
    "Hideki Matsuyama",
    "Sungjae Im",
    "Matthew Wolff",
    "Matt Kuchar",
    "Chez Reavie",
    "Tyrrell Hatton",
    "Brendon Todd",
    "Scottie Scheffler",
    "Paul Casey",
  ]);
  const results = golfers.data?.reduce((acc, cur) => {
    if (desiredPlayers.has(cur.name)) {
      if (!acc[cur.name]) {
        acc[cur.name] = { events: [], name: cur.name };
      }
      acc.push(cur);
    }
    return acc;
  }, []);

  return golfers.isLoading ? (
    "loading"
  ) : golfers.isError ? (
    "error"
  ) : results ? (
    <>
      <ul className='scoreboard'>
        {results.map((user) => {
          return (
            <div key={nanoid()}>
              <div className="main-details">
                <h5>{user.status} {user.name}</h5>
                <p>total: {user.strokes}</p>
                <p>
                  today: {user.today || "__"} thru: {user.hole || "__"}
                </p>
              </div>
              <div className="round-details">
                <p>round 1: {user.rounds[0]}</p>
                <p>round 2: {user.rounds[1]}</p>
                <p>round 3: {user.rounds[2]}</p>
                <p>round 4: {user.rounds[3]}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  ) : (
    "idk where the player data went -- text nic"
  );
}
