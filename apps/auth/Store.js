import * as SecureStore from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync("token", token);
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("token");
  } catch (error) {
    console.log(error);
  }
};

const getuser = async () => {
  try {
    const token = await getToken();
    return token ? jwtDecode(token) : null;
  } catch (error) {
    console.log(error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStore.deleteItemAsync("token");
  } catch (error) {
    console.log(error);
  }
};

export default { getToken, getuser, storeToken, removeToken };
