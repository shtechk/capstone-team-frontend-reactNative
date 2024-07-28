import instance from "..";

const getAllRatings = async () => {
  const { data } = await instance.get("/ratings/Allratings");
  return data;
};

const addRating = async () => {
  const { data } = await instance.post("/ratings/Addrating");
  return data;
};

export { getAllRatings, addRating };
