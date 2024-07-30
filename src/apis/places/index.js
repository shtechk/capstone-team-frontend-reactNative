import instance from "../../api";

const getAllPlaces = async () => {
  const { data } = await instance.get("/api/place");
  return data;
};

const getPlaceById = async (id) => {
  console.log("CALLING");
  const { data } = await instance.get(`/api/place/${id}`);
  console.log("CALLING12");
  return data;
};
const searchPlaces = async (searchTerm) => {
  try {
    const { data } = await instance.get(
      `/api/place/search?search=${searchTerm}`
    );
    // console.log("first");
    return data;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};
export { getAllPlaces, getPlaceById, searchPlaces };
