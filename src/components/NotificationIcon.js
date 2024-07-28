import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { getALLNotifications } from "../apis/notifications";

const NotificationIcon = () => {
  const [hasNonseenNotifications, setHasNonseenNotifications] = useState(false);

  useEffect(() => {
    //fetch("http://localhost:3000/api/notifications")
    getALLNotifications()
      .then((response) => response.json())
      .then((data) => {
        const hasNonseen = data.some((notification) => notification.isNonseen);
        setHasNonseenNotifications(hasNonseen);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View
      style={{
        position: "relative",
        padding: 10,
      }}
    >
      <Text>🔔</Text>
      {hasNonseenNotifications && (
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: "red",
            borderRadius: 5,
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
      )}
    </View>
  );
};

export default NotificationIcon;
