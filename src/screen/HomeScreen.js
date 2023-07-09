import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import Search from "../components/Search";

export default function HomeScreen({ navigation }) {
  const param = {
    keyboardType: "numeric",
    placeholder: "Card Number",
    searchType: "cardType",
  };
  return (
    <View style={styles.container}>
      {/* <Header/> */}

      <Search param={param} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
