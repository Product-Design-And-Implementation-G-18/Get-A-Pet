import { useUser} from "@clerk/clerk-expo";
import {Link,Redirect,useRootNavigationState} from "expo-router";  
import { Pressable,Text, View } from "react-native";
import { useEffect} from "react";




export default function Index() {
  const{user }= useUser();
  

  const rootNavigationState = useRootNavigationState();

 useEffect(()=>{
  checkNanloaded();
 
}, [])

const checkNanloaded = () => {
  if(!
    rootNavigationState.key)
    return null
  }
  return (
    user && (
      <View
        style={{
          flex: 1,
        }}
      >
        {user ? (
          // Uncomment and replace with your navigation logic if needed
          // <Link href={'/(tabs)/'}>
          <Redirect href={'/(tabs)/home'} />
        ) : (
          <Redirect href={'/login/'} />
        )}
      </View>
    )
  );
}
