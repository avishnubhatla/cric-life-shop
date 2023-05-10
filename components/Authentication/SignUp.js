import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ToucahbleOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { AuthInputs } from './AuthInputs';
import { Buttons } from './buttons';
import {SocialSignIn} from './SocialSignin';
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const navigator= useNavigation();
  
  const onRegister = () => {

    navigator.navigate('Confirm');
  };
  const onSignIn = () => {
 
    navigator.navigate('SignIn')
  };
  const onContinueWithoutSignIn = () => {

    navigator.navigate('Main')
  };
  const onPrivacyPressed = () => {
    alert('privacy policy');
  };
  const onTermsPressed = () => {
    alert('ters of use');
  };

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigator.navigate('SignIn')
      })
      .catch(error => alert(error.message))
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create Account</Text>
        <AuthInputs
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <AuthInputs placeholder="Email" value={email} setValue={setEmail} />
        <AuthInputs
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <AuthInputs
          placeholder="Confirm Password"
          value={rePassword}
          setValue={setRePassword}
          secureTextEntry={true}
        />
        <Text style={styles.text}>
          By Registering, you agree to our{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>{' '}
          and{' '}
          <Text onPress={onTermsPressed} style={styles.link}>
            Terms of Use
          </Text>
        </Text>
        <Buttons text="Register" onPress={handleSignUp} />
        <SocialSignIn/>
        <Buttons
          text="Already have an account? Sign in"
          onPress={onSignIn}
          type="TERETIARY"
        />
        <Buttons
          text="Continue without Account"
          onPress={onContinueWithoutSignIn}
          type="TERETIARY"
        />
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

  title: {
    fontSize: 35,
    width: '150%',
    fontWeight: 'bold',
    color: '#FF0000',
    margin: 10,
    textAlign: 'center',
  },
  text: {},
  link: {},
});
