import client from "./client";

const signup = (username, password) =>
  client.post("/users/signup", { username, password });

const login = (username, password) =>
  client.post("/users/login", { username, password });

export default {
  signup,
  login,
};
