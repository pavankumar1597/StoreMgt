import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NavBarWithMiddleButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("IconButton pressed ...")}
        >
          <Icon name="home" color="#9299A1" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("IconButton pressed ...")}
        >
          <Icon name="comments" color="#9299A1" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.middleButton}
          onPress={() => console.log("MiddleButton pressed ...")}
        >
          <Icon name="plus" color="white" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("IconButton pressed ...")}
        >
          <Icon name="heart" color="#9299A1" size={27} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("IconButton pressed ...")}
        >
          <Icon name="cog" color="#9299A1" size={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// // Helper functions to map icon names
// function getFocusedIconName(label) {
//   if (label === homeName) {
//     return "home";
//   } else if (label === showCustomer) {
//     return "list";
//   } else if (label === customer) {
//     return "person";
//   } else if (label === setting) {
//     return "settings";
//   }

//   return "home";
// }

// function getUnfocusedIconName(label) {
//   if (label === homeName) {
//     return "home-outline";
//   } else if (label === showCustomer) {
//     return "list-outline";
//   } else if (label === customer) {
//     return "person-outline";
//   } else if (label === setting) {
//     return "settings-outline";
//   }

//   return "home-outline";
// }

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    backgroundColor: "#EEEEEE",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 20,
    backgroundColor: "#F4F7F9",
    shadowColor: "#57636C",
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
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
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  middleButton: {
    borderColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    width: 60,
    height: 60,
    backgroundColor: "#FF5722",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

export default NavBarWithMiddleButton;
