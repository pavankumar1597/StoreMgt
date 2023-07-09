import * as React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import NavBarWithMiddleButton from "./NavBarWithMiddleButton";

const homeName = "Home";
const showCustomer = "ShowCustomer";
const customer = "Customer";
const setting = "Setting";
const plus = "Add";

export function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title !== undefined ? options.title : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (false) {
          // Render the custom NavBarWithMiddleButton component
          return <NavBarWithMiddleButton key={route.key} onPress={onPress} />;
        }

        // Render the default tab icon
        return (
          <View style={styles.container}>
            <View style={styles.background} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  style={index == 7 ? styles.middleButton : styles.button}
                  name={
                    isFocused
                      ? getFocusedIconName(label)
                      : getUnfocusedIconName(label)
                  }
                  color={isFocused ? "tomato" : "white"}
                  size={24}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}

// Helper functions to map icon names
function getFocusedIconName(label) {
  if (label === homeName) {
    return "home";
  } else if (label === showCustomer) {
    return "list";
  } else if (label === customer) {
    return "person";
  } else if (label === setting) {
    return "settings";
  } else if (label === plus) {
    return "add-circle";
  }

  return "home";
}

function getUnfocusedIconName(label) {
  if (label === homeName) {
    return "home-outline";
  } else if (label === showCustomer) {
    return "list-outline";
  } else if (label === customer) {
    return "person-outline";
  } else if (label === setting) {
    return "settings-outline";
  } else if (label === plus) {
    return "add-outline";
  }

  return "home-outline";
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    height: 65,
    backgroundColor: "#EEEEEE",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#F4F7F9",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    flex: 1,
  },
  button: {
    borderColor: "transparent",
    borderRadius: 30,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    color: "#9299A1",
  },
  middleButton: {
    borderColor: "transparent",
    backgroundColor: "#4B39EF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    fontSize: 40,
    color: "white",
    width: 60,
    height: 60,
    borderRadius: 4,
    paddingLeft: 6,
    paddingTop: 5,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
