import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const CardProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=512&h=512",
          }}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.job}>Web Developer</Text>
      <View style={styles.contactContainer}>
        <View style={styles.contactItem}>
          <Icon name="email-outline" size={24} color="#666666" />
          <Text style={styles.contactText}>johndoe@example.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="phone-outline" size={24} color="#666666" />
          <Text style={styles.contactText}>+1 123-456-7890</Text>
        </View>
        <View style={styles.contactItem}>
          <Icon name="location-on-outline" size={24} color="#666666" />
          <Text style={styles.contactText}>New York, USA</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  profileContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: "hidden",
    marginVertical: 16,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  job: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 12,
  },
  contactContainer: {
    width: "100%",
    paddingHorizontal: 16,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    borderRadius: 12,
    height: 60,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  contactText: {
    marginLeft: 12,
  },
});

export default CardProfile;
