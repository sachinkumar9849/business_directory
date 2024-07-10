import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Text, View, Image, StyleSheet, TextInput } from 'react-native';
import { Colors } from "../../constants/Colors";
import { AntDesign } from '@expo/vector-icons';

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
      <View style={styles.userInfo}>
        <Image source={{ uri: user?.imageUrl }} style={styles.image} />
        <View>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.userName}>{user.fullName}</Text>
        </View>
      </View>
      <View style={styles.input_wrap}>
      <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value=""
        />
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 28 ,
    paddingTop: 55,
    backgroundColor: Colors.primary,
    color: "white",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    flex: 0,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0, // Adjust this value as needed to fit your design
    marginRight: 10,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 99,
    marginRight: 10,
  },
  welcomeText: {
    color: "white",
  },
  userName: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 18,
  },
  input_wrap: {
    // flex: 0,
    marginTop:10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 10,
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    paddingLeft:10,
  },
  input: {
    height: 45,
    paddingLeft: 8,
    borderRadius: 10,
    border:0
  },
});

export default Header;
