import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { ImageInput } from "./ImageInput";

export const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onImageAdd,
}) => {
  const scrollRef = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollRef}
        horizontal
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris?.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput imageUri={uri} onChangeImage={onRemoveImage} />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onImageAdd(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap" },
  image: {
    marginRight: 10,
  },
});
