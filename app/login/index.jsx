import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from './../../constants/Colors'

export default function LoginScreen() {
  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      height:'100%'
    } }>
<Image source={require('./../../assets/images/login.png')} style={{
        width: '100%',
        height: 450,
        
        }} />
        
<View style={{
    padding:20,
    display:'flex',
    alignItems:'center',
}}
>
            <Text style={{ 
                fontFamily:'outfit-bold',
                fontSize:30,
                textAlign:'center',
                color: Colors.GRAY
                
         
         }}>Ready to make a new friend?</Text>
         <Text style={{
            fontFamily:'outfit-semibold',
            fontSize:18,
            marginTop:10,
            textAlign:'center',
         }}>"Rescue, love, repeat- adopt your new best friend!"</Text>
         

         <Pressable style={{
                padding: 14,
                backgroundColor: Colors.PRIMARY,
                width: '100%',
                borderRadius: 14,
                marginTop: 100,
              }}>
                <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 20,
                textAlign: 'center',
                color: Colors.BLUE,
                marginBottom: 0,
          }}>Get started</Text>
         </Pressable>
    </View>
  </View>
  )
}