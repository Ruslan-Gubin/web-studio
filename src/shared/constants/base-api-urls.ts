export const DEVELOPMENT_API_ENDPOINT = new URL("http://localhost:4444/api");
export const PRODUCTION_API_ENDPOINT = new URL(
  "https://monopoly-back.onrender.com/api"
);

export const API_ENDPOINT =
  process.env.NODE_ENV === "development"
    ? DEVELOPMENT_API_ENDPOINT
    : PRODUCTION_API_ENDPOINT;
