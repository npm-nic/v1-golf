import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export default function useAllGolfers() {
  return useQuery(
    "golfers",
    () =>
      axios
        .get("https://v1-golf.herokuapp.com/api/pga")
        .then((res) => res.data.events[0].players),
    {}
  );
}
