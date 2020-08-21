import React from "react";
import useEventsQuery from "../queries/useEventsQuery";
import { useEventDetails } from "../helpers/useEventDetails";
import { useTable } from "react-table";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const columns2 = [
  {
    Header: "#",
    accessor: "status",
  },
  {
    Header: "Golfer",
    accessor: "name",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "Today",
    accessor: "today",
  },
  {
    Header: "Thru",
    accessor: "hole",
  },

  // {
  //   Header: "R1",
  //   accessor: "rounds[0]",
  // },
  // {
  //   Header: "R2",
  //   accessor: "rounds[1]",
  // },
  // {
  //   Header: "R3",
  //   accessor: "rounds[2]",
  // },
  // {
  //   Header: "R4",
  //   accessor: "rounds[3]",
  // },
];

function ScoreboardDetails({ eventName }) {
  const eventsQuery = useEventsQuery();
  const eventDetails = useEventDetails(eventsQuery, eventName);
  const playersDetails = eventDetails.players;

  const columns = Object.keys(playersDetails[0]).map((key, id) => {
    return {
      Header: key.toUpperCase(),
      accessor: key,
    };
  });
  return eventsQuery.isLoading ? (
    "loading"
  ) : eventsQuery.isError ? (
    "error"
  ) : (
    <>
      <div className='golfer-details-tray'>
        <Table columns={columns2} data={playersDetails} />
      </div>
    </>
  );
}

export default ScoreboardDetails;
