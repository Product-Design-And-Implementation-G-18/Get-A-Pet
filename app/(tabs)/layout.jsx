import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../constants/Colors'
import { Tabs } from 'expo-router'


export default function TabLayout() {
  return (
   <Tabs
   screenOptions={{
    tabBarActiveTintColor:Colors.PRIMARY}}
   >
    <Tabs.Screen name='home'
    options={{
      title:'Home',
      headerShown: false,
      tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />
    }}
    />
    <Tabs.Screen name='favourite'
     options={{
      title:'Favourite',
      headerShown: false,
      tabBarIcon:({color})=><Ionicons name="heart" size={24} color={color} />
    }}/>
    <Tabs.Screen name='inbox'
     options={{
      title:'Inbox',
      headerShown: false,
      tabBarIcon:({color})=><Ionicons name="chatbubble" size={24} color={color} />
    }}/>
    <Tabs.Screen name='profile'
     options={{
      title:'Profile',
      headerShown: false,
      tabBarIcon:({color})=><Ionicons name="people-circle" size={24} color={color} />
    }}/>
    </Tabs>
  )
}