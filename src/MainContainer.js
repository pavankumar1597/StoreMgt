import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screen/HomeScreen";
import ShowCustomer from "./screen/ShowCustomer";
import CustomerScreen from "./screen/CustomerScreen";
import InfiniteScroll from "./screen/InfiniteScroll";
import { CustomTabBar } from "./components/CustomTabBar";
import SettingScreen from "./screen/SettingScreen";

// Screen names
const homeName = "Home";
const showCustomer = "ShowCustomer";
const customer = "Customer";
const setting = "Setting";
const plus = "Add";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      tabBar={(props) => <CustomTabBar {...props} />} // Use the custom tab bar component
    >
      {/* Define your screen components */}
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={showCustomer} component={ShowCustomer} />
      <Tab.Screen name={plus} component={SettingScreen} />

      <Tab.Screen name={customer} component={CustomerScreen} />
      <Tab.Screen name={setting} component={InfiniteScroll} />
    </Tab.Navigator>
  );
};

export default MainContainer;
