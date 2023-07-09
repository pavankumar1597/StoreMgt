import React from 'react';
import { View, Text } from 'react-native';

const CustomerProfile = ({ route }) => {
  const { user } = route.params;

  return (
    <View>
      <Text>Welcome to the Settings Screen!</Text>
      <Text>User: {user.name}</Text>
      {/* Additional content for the Settings screen */}
    </View>
  );
};

export default CustomerProfile;
