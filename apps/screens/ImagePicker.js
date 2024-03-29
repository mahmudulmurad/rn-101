import React, { useEffect, useState } from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const ImagePickerScreen = () => {
  const [url, setUrl] = useState(null);

  const getCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      alert("You need to enable the purmission to access the component");
    }
  };

  useEffect(() => {
    getCameraPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setUrl(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: {
    width: 200,
    height: 200,
  },
});
