const url = require("url");
const functions = require("firebase-functions");

module.exports.paymentRequest = (request, response, client) => {
  return response.json("payment request success");
};
