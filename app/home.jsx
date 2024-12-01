
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { storage } from '../firebaseConfig'; // Import your Firebase config
import { ref, getDownloadURL } from 'firebase/storage';
import Header from '../assets/components/home/Header';

import Slider from '../assets/components/Home/Slider'; // Correct casing of file name

export default function Home() {
  const [closeImageUrl, setCloseImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const closeImageRef = ref(storage, 'images/close.png'); // Path in Firebase Storage
        const url = await getDownloadURL(closeImageRef); // Fetch URL
        setCloseImageUrl(url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImage();
  }, []);

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

      {/* Firebase Image Example */}
      {closeImageUrl ? (
        <Image source={{ uri: closeImageUrl }} style={styles.image} />
      ) : (
        <Text>Loading image...</Text>
      )}

      {/* Category */}

      {/* Lists of Pets */}

      {/* Add New Pets Option */}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

