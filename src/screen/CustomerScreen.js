import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { doc, addDoc, getDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../common/Firebase";
import { Picker } from "@react-native-picker/picker";

const CustomerScreen = () => {
  const usersQuery = collection(db, "userDetails");

  const [userDetails, setUserDetails] = useState({
    customerName: "",
    address: "Bangalore",
    mobile: "",
    cardNb: [],
    description: "",
  });

  const inputRef = useRef();
  const cardText = useRef(null);

  // Create a reference to the specific document

  // Retrieve the document
  const getDocumentById = async (documentRef) => {
    try {
      const documentSnapshot = await getDoc(
        doc(collection(db, "UgadiCard"), documentRef)
      );
      if (documentSnapshot.exists()) {
        const cardData = documentSnapshot.data();
        if (cardData.isNonVeg) {
          console.log(" yes  thsi is non veg");
          // change this to brown
          return { newcolour: "brown" };
          // is non veg
        } else return { newcolour: "green" };
        // Rest of the code...
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  const handleAddressChange = (value) => {
    setAddress(value);
  };
  const handleShowCustomers = () => {
    setAddress(value);
  };

  const handleAddCustomer = async () => {
    const userDetailsRef = collection(db, "userDetails");

    const newDoc = await addDoc(userDetailsRef, userDetails);
    // const documentRef = doc(userDetailsRef, "1");

    userDetails.cardNb.forEach((card) => {
      updateDoc(doc(db, "UgadiCard", "udadi2023Card1" + card), {
        customerId: newDoc.id,
      })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    });

    setUserDetails({
      customerName: "",
      address: "Bangalore",
      mobile: "",
      cardNb: [],
      description: "",
    });
  };

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const addChip = async () => {
    const { newcolour } = await getDocumentById("ugadi2023Card" + text);

    setData([...data, { newcolour: newcolour, number: text }]);
    setUserDetails({ ...userDetails, cardNb: text });
    setText("");

    // inputRef.current.clear();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Add a Customer</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={userDetails.customerName}
          onChangeText={(text) => {
            setUserDetails({ ...userDetails, customerName: text });
          }}
        />

        <Picker
          style={[styles.picker, styles.pickerContainer, styles.container]}
          selectedValue={userDetails.address}
          onValueChange={(text) => {
            setUserDetails({ ...userDetails, address: text });
          }}
        >
          <Picker.Item label="Bangalore" value="Bangalore" />
          <Picker.Item label="Mysore" value="Mysore" />
          <Picker.Item label="Kolar" value="Kolar" />
          <Picker.Item label="Mangalore" value="Mangalore" />
          <Picker.Item label="Hubli" value="Hubli" />
        </Picker>

        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          value={userDetails.mobile}
          keyboardType="numeric"
          onChangeText={(text) => {
            setUserDetails({ ...userDetails, mobile: text });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          keyboardType="numeric"
          value={text}
          onChangeText={(txt) => setText(txt)}
          ref={inputRef}
          onSubmitEditing={() => {
            addChip();
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* <FlatList
            data={data}
            renderItem={({ item }) => (
         
            )}
            keyExtractor={(item, index) => index.toString()}
          /> */}

          {data?.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: 0.5,
                  borderRadius: 30,
                  padding: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: item.newcolour,
                }}
              >
                <Text
                  ref={cardText}
                  style={{ marginLeft: 5, fontSize: 10, fontWeight: 900 }}
                >
                  {item.number}
                </Text>
                <TouchableOpacity>
                  <FontAwesome name="trash" size={15} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <TextInput
          style={styles.input}
          placeholder="Description"
          value={userDetails.description}
          onChangeText={(text) => {
            setUserDetails({ ...userDetails, description: text });
          }}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddCustomer}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.showCustomersButton}
          onPress={() => navigation.navigate("showCustomer")}
        ></TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    marginBottom: 50,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 10,
  },
  picker: {
    width: 320,
  },
  addButton: {
    backgroundColor: "#023252",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    color: "#F7F7F7",
  },
  buttonText: {
    color: "#F7F7F7",
  },
});
