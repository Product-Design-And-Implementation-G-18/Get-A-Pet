import { useUser } from "@clerk/clerk-expo";
import { Link, useRootNavigationState } from "expo-router";
import { Redirect } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useEffect } from "react";

export default function Index() {
  const { user } = useUser();

  const rootNavigationState = useRootNavigationState();

  const checkNanloaded = () => {
    if (!rootNavigationState.key) return null;
  };

  useEffect(() => {
    checkNanloaded();
  }, [rootNavigationState]);

  return (
    user && (
      <View
        style={{
          flex: 1,
        }}
      >
        {user ? 
         
          <Redirect href={"(tabs)/home"} />
          :<Redirect href={"/login/"} />
        }
      </View>
    )
  );
}
