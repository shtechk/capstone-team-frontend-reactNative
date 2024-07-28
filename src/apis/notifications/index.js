import instance from "..";
const getALLNotifications = async () => {
  const { data } = await instance.get("/apis/notification");
  return data;
};
export { getALLNotifications };
