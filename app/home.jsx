import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ref, getDownloadURL } from 'firebase/storage'; 
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import Slider from '../assets/components/Home/Slider';

import Header from '../assets/components/Home/Header';
import {db} from '../config/FirebaseConfig';








export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'sliders'));
     const data = querySnapshot.docs.map((doc) => doc.data());
      console.log(data);
      setData(data);
    };
    fetchData();
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
      {data.length > 0 ? (
        data.map((item, index) => (
          <>
          <Image source={{ uri: item.imageUrl }} 
          key={index} 
          style={{ width: 100, height: 100 }}
          resizeMode="cover"
          />
          <Text>{item.name}</Text>
          </>
        ))
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

