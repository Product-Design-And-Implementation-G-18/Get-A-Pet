import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { storage } from '../../../config/FirebaseConfig'; 
import { ref, getDownloadURL } from 'firebase/storage'; 



import { db } from '../../../config/FirebaseConfig';




export default function Slider() {
  const [SliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliders();
  }, []);

  const GetSliders = async () => {
    const snapshot = await getDocs(collection(db, 'sliders'));
    const sliders = [];

    // Loop through each document in the 'Sliders' collection
    for (const doc of snapshot.docs) {
      const sliderData = doc.data();
      try {
        
        const imageRef = ref(storage, sliderData.imageUrl); 
        const imageUrl = await getDownloadURL(imageRef); 
        
        // Push the image URL to the sliders array
        sliders.push({ ...sliderData, imageUrl });
      } catch (error) {
        console.error('Error fetching image URL:', error);
      }
    }

    // Set the state with the updated sliders array
    setSliderList(sliders);
  };

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        data={SliderList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item?.imageUrl }} style={styles.SliderImage} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SliderImage: {
    width: 200,
    height: 120,
    marginRight: 10,
  },
});
