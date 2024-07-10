import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack, useRouter } from "expo-router";
import React, { Profiler } from 'react';
import { Text } from "react-native";
import LoginScreen from "./../components/LoginScreen";
import * as SecureStore from 'expo-secure-store';

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (error) {
      return null;
      
    }
  },
  async saveToken(key ,value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const linking ={
  prefixes: ['yourapp://', 'https://yourapp.com'],
config:{
  screen:{
    "(tabs)":{
      screen:{
        home:"home",
        explore:"explore",
        profile:"profile",
      }
    }
  }
}
}

export default function RootLayout() {


  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Stack screenOptions={{headerShown:false}} linking={linking}>
        <SignedIn>
        <Stack.Screen name="(tabs)" />
        </SignedIn>
        <SignedOut>
          <Stack.Screen name="login" component={LoginScreen} />
        </SignedOut>


      </Stack>
      {/* <SignedIn>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut> */}
    </ClerkProvider>
  );
}
