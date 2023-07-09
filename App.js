import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen";
import SettingScreen from "./src/screen/SettingScreen";
import CustomerScreen from "./src/screen/CustomerScreen";
import CustomerProfile from "./src/screen/CustomerProfile";
import ShowCustomer from "./src/screen/ShowCustomer";
import MainContainer from "./src/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import InfiniteScroll from "./src/screen/InfiniteScroll";
import CardProfile from "./src/screen/CardProfile";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="main"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="main" component={MainContainer} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="setting" component={SettingScreen} />
        <Stack.Screen name="show" component={ShowCustomer} />
        <Stack.Screen name="profile" component={CustomerProfile} />
        <Stack.Screen name="customer" component={CustomerScreen} />
        <Stack.Screen name="infiniteScroll" component={InfiniteScroll} />
        <Stack.Screen name="cardProfile" component={CardProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
