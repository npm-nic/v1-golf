import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function useEventsQuery() {
  return useQuery(
    "events",
    () =>
      axios
        .get("https://v1-golf.herokuapp.com/api/pga")
        .then((res) => res.data),
    {
      staleTime: 5 * 1000,
    }
  );
}
