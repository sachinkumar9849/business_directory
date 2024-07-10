import React from 'react';
import {Tabs} from "expo-router"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';

const TabLayout = () => {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: Colors.primary
    }}>
      <Tabs.Screen name="home"
      options={{
        tabBarLabel:"Home",
        tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />

      }}
      />
      <Tabs.Screen name="explore"
      options={{
        tabBarLabel:"Explore",
        tabBarIcon: ({color})=>
          <Ionicons name="search" size={24} color={color} />
      }}
      />
      <Tabs.Screen name="profile"
      options={{
        tabBarLabel:"Profile",
        tabBarIcon: ({color})=>
          // <Ionicons name="users" size={24} color={color} />  
        <Feather name="users" size={24} color={color} />
      }}
      />
    </Tabs>
  )
}

export default TabLayout