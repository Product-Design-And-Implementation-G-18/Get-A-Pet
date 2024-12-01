import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/FirebaseConfig';

export default function Slider() {
  const [SliderList, setSliderList] = useState([]);

  useEffect(() => {
    GetSliders();
  }, []);

  const GetSliders = async () => {
    const snapshot = await getDocs(collection(db, 'Sliders'));
    snapshot.forEach((doc) => {
      console.log(doc.data());
      setSliderList((SliderList) => [...SliderList, doc.data()]);
    });
  };

  return (
    <View style={{
    marginTop:15
    }}>
      <FlatList
        data={SliderList}
        horizontal ={true}
        showsHorizontalScrollTndicator={false}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item?.imageUrl }}
              style={styles?.SliderImage}
              
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SliderImage: {
    width: Dimensions.get('screen').width*0.9,
    height: 17,
    borderRadius: 15,
    marginRight:15
  },
});
