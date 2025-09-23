export const ossBaseURL =
  process.env.NODE_ENV === "production"
    ? "/media-proxy/"
    : "http://120.25.178.64:3150/";