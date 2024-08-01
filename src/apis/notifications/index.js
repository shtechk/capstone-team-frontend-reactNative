import instance from "..";

const getALLNotifications = async () => {
  const { data } = await instance.get("/api/notification");
  return data;
};
export { getALLNotifications };
