import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();
  const navigation = useNavigation();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
        navigation.navigate('home');  // Navigate to home page after setting session
      } else {
        // Handle additional steps like MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image source={require('./../assets/images/mobile.png')} style={styles.image} />
      </View>
      <View style={styles.titleWrap}>
        <Text style={styles.titleText}>
          Your Ultimate <Text style={styles.highlightText}>Community Business Directory</Text> App
        </Text>
        <Text style={styles.smallText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A praesentium n.
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    marginTop: 80,
  },
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  titleText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  highlightText: {
    color: 'rgb(48, 48, 194)',
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    color: "gray",
    marginTop: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 50,
    width: "100%",
    textAlign: "center",
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
