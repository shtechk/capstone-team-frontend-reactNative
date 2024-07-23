import instance from "..";

const getAllCategories = async () => {
  const { data } = await instance.get("/apis/category");
  return data;
};

export { getAllCategories };
