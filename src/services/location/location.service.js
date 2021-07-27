import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://b40520e960d3.ngrok.io/mealstogo-d1a74/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
