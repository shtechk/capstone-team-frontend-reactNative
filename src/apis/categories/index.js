import instance from "../../api";

const getAllCategories = async () => {
  const { data } = await instance.get("/api/category");
  return data;
};

export { getAllCategories };
