import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const userPermissionAndLocation = async () => {
    try {
      const { granted } = await Permissions.askAsync(
        Permissions.LOCATION_BACKGROUND
      );
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userPermissionAndLocation();
  }, []);
  return location;
};
