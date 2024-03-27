import client from "./client";

const slug = "/photos";

const getListings = () => client.get(slug);

export default {
  getListings,
};
