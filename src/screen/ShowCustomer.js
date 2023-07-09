import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { db } from "../common/Firebase";
import { useNavigation } from "@react-navigation/native";

const ShowCustomer = () => {
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, "userDetails");
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = [];
      snapshot.docs.map((doc) => {
        usersList.push({ ...doc.data(), id: doc.id });
        // console.log(userDetails)
      });
      setUserDetails(usersList);
      setLoading(false);
    });
  }, []);

  const handleEdit = (userRef) => {
    navigation.navigate("update", {
      userRef,
    });
  };

  const handleDelete = () => {
    // Handle delete functionality
  };
  const showProfile = (user) => {
    // console.log(user)
    // Handle delete functionality
    navigation.navigate("profile", { user });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color="#023252" />
          </View>
        ) : (
          <View style={styles.userDetailsContainer}>
            {userDetails.map((user, key) => (
              <TouchableOpacity onPress={() => showProfile(user)} key={user.id}>
                <View style={styles.userItemContainer}>
                  <Text style={styles.cardNb}>Card Nb: {user.cardNb}</Text>
                  <View style={styles.actionsContainer}>
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => handleEdit(user.id)}
                    >
                      {/* <Icon
                      name="edit"
                      size={24}
                      color={FlutterFlowTheme.secondaryText}
                    /> */}

                      <FontAwesome name="edit" size={25}></FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={handleDelete}
                    >
                      <FontAwesome name="trash" size={25}></FontAwesome>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.details}>Name: {user.customerName}</Text>
                  <Text style={styles.details}>Mobile: {user.mobile}</Text>
                  <Text style={styles.details}>Address: {user.address}</Text>
                  <Text style={styles.details}>Desp: {user.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userDetailsContainer: {
    padding: 16,
  },
  userItemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#023252",
    padding: 16,
  },
  cardNb: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 8,
  },
  editButton: {
    marginRight: 16,
  },
  deleteButton: {},
  details: {
    marginBottom: 8,
  },
});

export default ShowCustomer;
