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
import {useNavigation} from '@react-navigation/native'
export function ConfirmEmail() {
  const [code, setCode] = useState('');
  const navigator=useNavigation();
  const onConfirm = () => {
    navigator.navigate('Main')
  };
  const onResend = () => {
    alert('Resend');

  };
  const onSignIn = () => {

    navigator.navigate('SignIn')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <AuthInputs
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
        />
        
        <Buttons text="Confirm Account" onPress={onConfirm} />
        <Buttons text="Resend your code" onPress={onResend} type='SECONDARY' />
        <Buttons text="Go to Sign in" onPress={onSignIn} type='TERETIARY' />
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
