import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  TextInput
} 
from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
import { useNavigation } from '@react-navigation/native';
import {SocialSignIn} from './SocialSignin';
//new imports
import { KeyboardAvoidingView } from 'react-native'
import { auth } from '../firebase'

export function SignIn() {
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigator=useNavigation()

  const onSignIn = () => {

    navigator.navigate('Main')
  };
  const onForgot = () => {

    navigator.navigate('ResetPassword')
  };
  
  const onSignUp = () => {
    navigator.navigate('SignUp')
  };
  const onContinueWithoutSignIn = () => {
    navigator.navigate('Main')
  };
  
  // new stuff
  

  const [email, setEmail] = useState('')
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
        navigator.navigate('Main')
      })
      .catch(error => alert(error.message))
  }

  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          style={[styles.logo, { height: height * 0.3 }]}
          source={{
            uri: 'https://cdn.discordapp.com/attachments/983539166488977472/1003006843746009169/unknown.png',
          }}
          resizeMode="contain"
        />
        <AuthInputs
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <AuthInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <Buttons text="Sign In" onPress={handleLogin} />
        <Buttons text="Forgot Password?" onPress={onForgot} type="TERETIARY" />
        <SocialSignIn />
        <Buttons text="Don't have an account? Create one" onPress={onSignUp} type="TERETIARY" />
        <Buttons text="Continue without signing in" onPress={onContinueWithoutSignIn} type="TERETIARY" />
      </View>
    </ScrollView>
  );
    
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 80,
    backgroundColor: '#F9FBFC',
  },
  logo: {
    width: '70%',
    maxHeight: 200,
    maxWidth: 300,
  },
  
});
