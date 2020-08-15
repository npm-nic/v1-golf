export const useEventDetails = (query, eventName) => {
  console.log("useEventDetails -> eventName", eventName);
  const eventDetails = query.data.events.filter((e) => e.name === eventName);
  return eventDetails;
};
