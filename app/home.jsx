import React from 'react';
import { View, Text } from 'react-native';
import Header from '../assets/components/Home/Header';
import Slider from '../assets/components/Home/Slider';

 // Ensure the correct path to the Slider component

export default function Home() {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Category */}

      {/* Lists of Pets */}

      {/* Add New Pets Option */}
    </View>
  );
}
