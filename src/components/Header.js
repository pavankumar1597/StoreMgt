import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.lightHeader}> Search Card</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  lightHeader: {
    fontSize: 25,
  },
  boldHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  viewContainer: {
    marginHorizontal: 25,
  },
});
