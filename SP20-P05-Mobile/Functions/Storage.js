import { AsyncStorage } from "react-native";

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log("Data stored:\n", JSON.stringify(value));
  } catch (error) {
    console.log("Error storing user Data...\n", error);
  }
};
export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Retrieved Data:\n", data);
      return value;
    }
  } catch (error) {
    console.log("Error retrieving data...\n", error);
  }
};
export const _removeData = async (data) => {
  try {
    await AsyncStorage.removeItem(data);
    console.log("Data removed from storage...");
  } catch (error) {
    console.log("Could not remove Data from storage...\n", error);
  }
};
