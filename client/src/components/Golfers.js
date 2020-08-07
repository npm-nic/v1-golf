import React from "react";
import { nanoid } from "nanoid";

import useAllGolfers from "../queries/useAllGolfers";
import useFilteredGolfers from "../useFilteredGolfers";
import Golfer4 from "./Golfer4";

const allOurPlayers = new Set([
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

const mitch = new Set([
  "Brooks Koepka",
  "Paul Casey",
  "Patrick Reed",
  "Adam Scott",
]);
const nic = new Set([
  "Bryson Dechambeau",
  "Gary Woodland",
  "Sergio Garcia",
  "Scottie Scheffler",
]);
const nick = new Set([
  "Justin Thomas",
  "Tommy Fleetwood",
  "Phil Mickelson",
  "Brendon Todd",
]);
const bob = new Set([
  "Xander Schauffele",
  "Tony Finau",
  "Matthew Fitzpatrick",
  "Tyrrell Hatton",
]);
const tim = new Set([
  "Dustin Johnson",
  "Justin Rose",
  "Shane Lowry",
  "Chez Reavie",
]);
const fingers = new Set([
  "Jon Rahm",
  "Viktor Hovland",
  "Louis Oosthuizen",
  "Matt Kuchar",
]);
const jeremy = new Set([
  "Rory Mcilroy",
  "Collin Morikawa",
  "Daniel Berger",
  "Matthew Wolff",
]);
const jordan = new Set([
  "Jordan Spieth",
  "Jason Day",
  "Marc Leishman",
  "Sungjae Im",
]);
const rj = new Set([
  "Patrick Cantlay",
  "Webb Simpson",
  "Abraham Ancer",
  "Hideki Matsuyama",
]);
const dunz = new Set([
  "Tiger Woods",
  "Rickie Fowler",
  "Cameron Champ",
  "Lucas Glover",
]);
const us = [mitch, nic, nick, bob, tim, fingers, jeremy, jordan, rj, dunz];

export default function Golfers() {
  const golfers = useAllGolfers();

  const results = useFilteredGolfers(golfers, allOurPlayers);

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
              <div className='main-details'>
                <h5>
                  {user.status} {user.name} {user.score}
                </h5>
                <p>total: {user.strokes}</p>
                <p>
                  today: {user.today || "__"} thru: {user.hole || "__"}
                </p>
              </div>
              <div className='round-details-vert'>
                <p>round 1: {user.rounds[0]}</p>
                <p>round 2: {user.rounds[1]}</p>
                <p>round 3: {user.rounds[2]}</p>
                <p>round 4: {user.rounds[3]}</p>
              </div>
            </div>
          );
        })}
      </ul>
      <ul className='scoreboard split-entry'>
        {us.map((team) => (
          <Golfer4 team={team} key={nanoid()} />
        ))}
      </ul>
    </>
  ) : (
    "idk where the player data went -- text nic"
  );
}
