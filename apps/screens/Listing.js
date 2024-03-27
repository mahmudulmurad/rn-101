import React, { useEffect, useState } from "react";
import { BaseScreen } from "./Base";
import { FlatList, StyleSheet } from "react-native";
import { Card } from "../component/Card";
import colors from "../config/colors";
import Routes from "../navigation/Routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import listingApi from "../api/listing";
import { AppText } from "../component/AppText";
import { AppButton } from "../component/AppButton";
import { LoadingIndicator } from "../component/LoadingIndicator";
import useApiWorker from "../hooks/API/";

export const Listing = ({ navigation }) => {
  const {
    data: items,
    error,
    loading,
    request: loadItems,
  } = useApiWorker(listingApi.getListings);

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <BaseScreen style={styles.container}>
      {error && (
        <>
          <AppText> Something went wrong!</AppText>
          <AppButton title="Retry" onPress={loadItems} />
        </>
      )}
      <LoadingIndicator visible={loading} />
      <GestureHandlerRootView>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <Card
              key={index}
              title={item.title}
              description={"$" + item.id}
              image={item.url}
              onPress={() => navigation.navigate(Routes.Listing_Details, item)}
            />
          )}
        />
      </GestureHandlerRootView>
    </BaseScreen>
  );
};

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
