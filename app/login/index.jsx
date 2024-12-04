import { View, Text, Image, Pressable } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import Colors from './../../constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/(tabs)/home', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        // Handle successful OAuth flow
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  return (
    <View style={styles.container}>
      <Image source={require('./../../assets/images/login.png')} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Ready to make a new friend?</Text>
        <Text style={styles.subtitle}>"Rescue, love, repeat- adopt your new best friend!"</Text>
        <Pressable onPress={onPress} style={styles.button}>
          <Text style={styles.buttonText}>Get started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: Colors.WHITE,
    height: '100%',
  },
  image: {
    width: '100%',
    height: 450,
  },
  content: {
    padding: 20,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 30,
    textAlign: 'center',
    color: Colors.GRAY,
  },
  subtitle: {
    fontFamily: 'outfit-semibold',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    padding: 14,
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    borderRadius: 14,
    marginTop: 100,
  },
  buttonText: {
    fontFamily: 'outfit-medium',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.BLUE,
    marginBottom: 0,
  },
};