import AsyncStorage from "@react-native-async-storage/async-storage";

export const keys = {
  login: "LOGIN",
  userId: "USERID",
  token: "Token",
  authInfo: "AuthInfo",
  firstLoad: "firstLoad",
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    const val = await AsyncStorage.setItem(key, jsonValue);
    return val;
  } catch (e) {
    // saving error
  }
};
export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export const removeData = async (key) => {
  try {
    const val = await AsyncStorage.removeItem(key);
    return val;
  } catch (e) {
    // saving error
  }
};
