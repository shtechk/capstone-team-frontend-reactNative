import instance from "../../api/index";

const getAllRatings = async (_id) => {
  const { data } = await instance.get(`/api/ratings/Allratings/${_id}`);
  return data;
};

const addRating = async ({ placeId, mood, note }) => {
  console.log("ccc", placeId, mood, note);
  const response = await instance.post("/api/ratings/Addrating", {
    placeId,
    mood,
    note,
  });
  return response.data;
};

export { getAllRatings, addRating };
