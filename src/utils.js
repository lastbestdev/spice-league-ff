const isDev = process.env.IS_DEVELOPMENT == "true";

export const BASE_URL_PATH = isDev ? "/" : "/spice-league-ff/";
export const getRelativeLink = (resource = "") => `${BASE_URL_PATH}${resource}`;
