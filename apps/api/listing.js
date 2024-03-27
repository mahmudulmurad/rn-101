import client from "./client";

const slug = "/listing";

const getListings = () => client.get(slug);

export default {
  getListings,
};
