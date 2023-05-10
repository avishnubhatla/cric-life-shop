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
import { useNavigation } from '@react-navigation/native'

export function NewPassword() {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword]=useState('')
  const navigator=useNavigation()
  const onSubmitNew = () => {
    navigator.navigate('Main')
  };
  const onSignIn = () => {

    navigator.navigate('SignIn')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Password</Text>
        <AuthInputs
          placeholder="Code"
          value={code}
          setValue={setCode}
        />
        
        <AuthInputs placeholder="Enter New Password" value={newPassword} setValue={setNewPassword} />
        <Buttons text='Submit' onPress={onSubmitNew}/>
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
