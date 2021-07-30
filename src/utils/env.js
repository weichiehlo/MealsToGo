import { Platform } from "react-native";
const liveHost = "https://us-central1-mealstogo-d1a74.cloudfunctions.net/";
const localHost = "http://966446d88217.ngrok.io/mealstogo-d1a74/us-central1";

export const isAndroid = Platform.OS === 'android'
export const isDevelopment = process.env.NODE_ENV === "development";
export const host = isDevelopment ? localHost : liveHost;
export const isMock = true
