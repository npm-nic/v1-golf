// import React from "react";
// import { nanoid } from "nanoid";

// export default function EventScoreboard({ event, setEvent }) {
//   const eventsQuery = useEventsQuery();

//   // [1]
//   const eventDetails = useEventDetails(eventsQuery, eventName);

//   return (
//     <ul className='league-scoreboard container'>
//       <div className='scoreboard-close' onClick={() => setEvent("")}>
//         <span>❌</span>
//       </div>
//       <p>{event.name}</p>
//       {event.players.map((golfer) => {
//         return (
//           <div key={nanoid()} className='round-details-horizontal'>
//             <div className='main-details'>
//               <h5>
//                 {golfer.status} {golfer.name} {golfer.score}
//               </h5>
//               <p>
//                 today: {golfer.today || "__"} thru: {golfer.hole || "__"}
//               </p>
//               <br />
//               <p>total: {golfer.strokes}</p>
//             </div>
//             <div className='round-details-vert'>
//               <p>R1: {golfer.rounds[0]}</p>
//               <p>R2: {golfer.rounds[1]}</p>
//               <p>R3: {golfer.rounds[2]}</p>
//               <p>R4: {golfer.rounds[3]}</p>
//             </div>
//           </div>
//         );
//       })}
//     </ul>
//   );
// }
