import { View, Text } from 'react-native'

import { collection, getDocs } from 'firebase/firestore'
import {db } from './../../config/FirebaseConfig';
import { useEffect } from 'react'
export default function slider() {
    useEffect(()=>{
        GetSliders();
    }, [])
    const GetSliders=async ()=>{
        const snapshot= await  getDocs(collection(db,'Sliders'));
        snapshot.forEach((doc) => {
            console.log(doc.data());
        });
    }
  return (
    <View>
      <Text>Slider</Text>
    </View>
  )
}