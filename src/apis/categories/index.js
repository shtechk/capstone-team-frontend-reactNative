import instance from "../../api";

const getAllCategories = async () => {
  const { data } = await instance.get("/category");
  return data;
};

export { getAllCategories };
