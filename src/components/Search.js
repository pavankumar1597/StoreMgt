import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/style";
import { doc, addDoc, getDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../common/Firebase";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const startSearch = async () => {
    const docRef = doc(db, "UgadiCard", "ugadi2023Card" + searchValue);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25}></FontAwesome>
      <TextInput
        style={styles.input}
        keyboardType={props.param.keyboardType}
        placeholder={props.param.placeholder}
        onChangeText={(txt) => setSearchValue(txt)}
        value={searchValue}
        onSubmitEditing={startSearch}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40,
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  },
});
