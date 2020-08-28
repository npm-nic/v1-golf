// import React from "react";
// import useFilterPlayers from "../helpers/useFilterPlayers";
// import { nanoid } from "nanoid";

// const TeamCard = ({ team, players }) => {
//   const teamArr = Array.from(team);
//   const myGolfers = useFilterPlayers(players, team);

//   return myGolfers ? (
//     <>
//       <div className='my-scorecard'>
//         {myGolfers.length === 0 && (
//           <>
//             <h3>"No data from the French"</h3>
//           </>
//         )}
//         {myGolfers.map((golfer) => {
//           return (
//             <div className='round-details-horizontal' key={nanoid()}>
//               <h5>
//                 {golfer.status} {golfer.name}
//               </h5>
//               <div className='round-scores'>
//                 <span>{golfer.rounds[0] || "__"}</span>
//                 <span>{golfer.rounds[1] || "__"}</span>
//                 <span>{golfer.rounds[2] || "__"}</span>
//                 <span>{golfer.rounds[3] || "__"}</span>
//               </div>
//             </div>
//           );
//         })}
//         <div className='my-scorecard'>
//           {teamArr.map((golfer) => (
//             <div className='round-details-horizontal' key={nanoid()}>
//               <h6>{golfer}</h6>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   ) : (
//     <div className='my-scorecard'>
//       <>
//         <h3>No Data from the French</h3>
//         {teamArr.map((golfer) => (
//           <p>{golfer}</p>
//         ))}
//       </>
//     </div>
//   );
// };

// export default TeamCard;
