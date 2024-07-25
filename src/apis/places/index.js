import instance from "../../api";

const getAllPlaces = async () => {
  const { data } = await instance.get("/place");
  return data;
};
const getPlaceById = async (id) => {
  const { data } = await instance.get(`/place${id}`);
  return data;
};
const searchPlaces = async (searchTerm) => {
  try {
    const { data } = await instance.get(
      `/place/search?search=${searchTerm}`
    ); //`/apis/place${searchTerm}` or `/apis/place?search=${searchTerm}`?? ask aziz
    return data;
  } catch (error) {
    console.error(error);
    return []; // Return an empty array in case of an error
  }
};
export { getAllPlaces, getPlaceById, searchPlaces };
