import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://5c96a05037ce.ngrok.io/mealstogo-d1a74/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  console.log(result);
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};

