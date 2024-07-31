import instance from "..";
// const getALLNotifications = async () => {
//   const { data } = await instance.get("/api/notification");
//   return data;
// };

const getMyNotifications = async () => {
  const { data } = await instance.get("/api/notification");
  return data;
};

const sendOneNotification = async (id, title, body) => {
  const { data } = await instance.post(`/api/notification/${id}`, {
    title,
    body,
  });
  return data;
};

// Example of sending a notification to a single user in the voutcher screen
//sendOneNotification('userId', 'Notification Title', 'Notification Body');

const sendNotificationForAll = async (title, body) => {
  const { data } = await instance.post("/api/notification", { title, body });
  return data;
};

// Example of sending a notification to all users in the business page
//sendNotificationForAll('Global Notification Title', 'Global Notification Body');

// Send the POST request to mark the notification as read
const markNotificationAsRead = async (notificationId) => {
  const { data } = await instance.post(`/api/notification/mark-as-read`, {
    notificationId,
  });
  return data;
};

export {
  getMyNotifications,
  sendOneNotification,
  sendNotificationForAll,
  markNotificationAsRead,
};
