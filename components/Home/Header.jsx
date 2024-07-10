import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <Text>Loading...</Text>;  // Display a loading message while user data is being fetched
  }

  if (!isSignedIn) {
    return <Text>Not signed in</Text>;  // Display a message if the user is not signed in
  }

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: user?.imageUrl }} style={styles.image} />
      </View>
      <View>
        <Text>Welcome</Text>
        <Text>{user?.fullName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:100,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});

export default Header;
