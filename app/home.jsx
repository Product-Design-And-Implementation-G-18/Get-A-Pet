import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import { ref, getDownloadURL } from 'firebase/storage'; 
import Slider from '../assets/components/Home/Slider';
import Header from '../assets/components/Home/Header';
import { storage } from '../config/FirebaseConfig'; 
import { collection, getDocs } from 'firebase/firestore';
export default function Home() {
  const [closeImageUrl, setCloseImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const closeImageRef = ref(storage, 'images/close.png'); 
        const url = await getDownloadURL(closeImageRef);
        setCloseImageUrl(url);
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <View style={styles.container}>
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
  container: {
    padding: 20,
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});


