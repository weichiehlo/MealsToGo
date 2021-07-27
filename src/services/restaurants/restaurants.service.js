import camelize from "camelize";
export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(
    `http://b40520e960d3.ngrok.io/mealstogo-d1a74/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

  export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      IsOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
