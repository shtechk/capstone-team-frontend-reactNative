import instance from "..";

const getAllPlaces = async () => {
  const { data } = await instance.get("/apis/place");
  return data;
};
const getPlaceById = async (id) => {
  const { data } = await instance.get(`/apis/place${id}`);
  return data;
};
const searchPlaces = async (searchTerm) => {
  try {
    const { data } = await instance.get(
      `/apis/place/search?search=${searchTerm}`
    );
    return data;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};
export { getAllPlaces, getPlaceById, searchPlaces };
