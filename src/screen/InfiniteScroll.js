import React, { useEffect, useState } from "react";

import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDoc,
  doc,
  startAfter,
  getDocs,
} from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../common/Firebase";

import { ScrollView } from "react-native";

const { height, width } = Dimensions.get("window");

const startSearch = async (searchValue) => {
  console.log("searching . . . . . . . . . . . . . . . . . .", searchValue);
  const docRef = doc(db, "userDetails", searchValue);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    const dataaa = snap.data().customerName;
    console.log(dataaa);
    return dataaa;
  } else {
    console.log("No such document");
  }
};

const InfiniteScroll = () => {
  const [documentData, setDocumentData] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      setLoading(true);
      const queryRef = collection(db, "UgadiCard");
      const q = query(
        queryRef,
        where("cardNumber", "<=", 1000),
        orderBy("cardNumber"),
        limit(1000)
      );

      const documentSnapshots = await getDocs(q);
      const documentData = await Promise.all(
        documentSnapshots.docs.map(async (document) => {
          const domdata = document.data();
          if (domdata.customerId !== "") {
            try {
              const dataat = await startSearch(domdata.customerId);
              return { ...domdata, customerData: dataat };
            } catch (error) {
              console.log(error);
              return { ...domdata, customerData: "N/A" };
            }
          } else {
            return { ...domdata, customerData: "N/A" };
          }
        })
      );

      // const lastVisible = documentData[documentData.length - 1].id;

      // const customerData = await startSearch(documentData.customerId);
      // setDocumentData({ ...documentData, customerData: customerData });
      setDocumentData(documentData);
      // setLastVisible(lastVisible);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveMore = async () => {
    try {
      console.log("smfnv adfkj vadfkj vdakfjnvdakfjnvdakfjnvdf");

      setRefreshing(true);
      const queryRef = collection(db, "UgadiCard");
      const q = query(
        queryRef,
        where("cardNumber", "<=", 1000),
        orderBy("cardNumber"),
        limit(1000)
      );

      const initialQuery = await getDocs(q);
      const documentSnapshots = initialQuery;
      co;
      const documentData = documentSnapshots.docs.map((document) =>
        document.data()
      );
      const newLastVisible = documentData[documentData.length - 1].id;

      setDocumentData((prevData) => [...prevData, ...documentData]);
      setLastVisible(newLastVisible);
      setRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderHeader = () => {
    return <Text style={styles.headerText}>Items</Text>;
  };

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator />;
    } else {
      return null;
    }
  };

  const viewCardStatus = (item) => {
    navigation.navigate("cardProfile", item);
  };

  const renderItem = ({ item }) => {
    const customerName = item.customerData;
    console.log(item);

    return (
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => viewCardStatus(item)}
      >
        <View style={styles.itemContainer}>
          <Text>
            Card: {item.cardNumber} Customer Name: {item.customerData}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={viewCardStatus("ddd")}>
        <Text>move else where</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <FlatList
  //       data={documentData}
  //       renderItem={renderItem}
  //       keyExtractor={(item, index) => String(index)}
  //       onEndReached={({ distanceFromEnd }) => {
  //         console.log(
  //           "ksjdvksjdnvksdjnvdksjlnvcdskjcndskjcnsdkjcndskjcnskjnvsdkjfnskjvnsfkvjn"
  //         );
  //       }}
  //       onEndReachedThreshold={0}
  //       refreshing={refreshing}
  //     />

  //     {/* <ScrollView>
  //       {documentData.map((item, index) => (
  //         <View key={index} style={{ padding: 10 }}>
  //           <Text>{item.cardNumber}</Text>
  //         </View>
  //       ))}
  //     </ScrollView> */}
  //   </SafeAreaView>
  // );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  headerText: {
    fontFamily: "System",
    fontSize: 36,
    fontWeight: "600",
    color: "#000",
    marginLeft: 12,
    marginBottom: 12,
  },
  itemContainer: {
    height: 80,
    width: width,
    borderWidth: 0.2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "System",
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
  },
});

export default InfiniteScroll;
