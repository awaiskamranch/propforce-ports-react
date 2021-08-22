const production = {
  url: "https://myapp.herokuapp.com",
};

const development = {
  url: "http://localhost:2000",
};

export const config =
  process.env.NODE_ENV === "development" ? development : production;
