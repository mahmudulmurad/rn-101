import client from "./client";

const slug = "/photos";

const getListings = () => client.get(slug);

const addListing = (item, progressStateFn) => {
  console.log(item);
  const data = new FormData();
  data.append("title", item.title);

  item.images.forEach((element, index) => {
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: element,
    });
  });
  return client.post(slug, data, {
    onUploadProgress: (progress) =>
      progressStateFn(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListing,
};
