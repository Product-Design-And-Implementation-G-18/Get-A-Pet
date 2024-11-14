import { View, Text } from 'react-native'
import React from 'react'
import Colors from'./../../constant/colors'

export default function LoginScreen() {
  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      height:'100%',
    } }>
<image source={require('./../../assests/images/login.png')}></image>

     style={{
        
        width:'100',
        height:'500',
        }}
        
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
                Color:Colors.GRAY
                
         
         }}>Ready to make a new friend?</Text>
         <Text style={{
            fontFamily:'outfit-semibold',
            fontSize:18,
            marginTop:10,
            textAlign:'center',
         }}>"Rescue, love, repeat- adopt your new best friend!"</Text>
         <pressable>

          
           style={{
                padding:14,
                backgroundColor:Colors.PRIMARY,
                width:'100%',
                borderRadius:14,
              }}
                
                <Text style={{
                marginBottom:20,
                fontFamily:'outfit-medium',
                fontSize:20,
                textAlign:'center',
                color:Colors.BLUE,
                marginTop:100,
                
              
          }}>Get started</Text>
         </pressable>

        </View>
    </View>
  )
}