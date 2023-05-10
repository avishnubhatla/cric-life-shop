import React from 'react'
import {View,Text} from 'react-native'
import {Buttons} from './buttons'
export function SocialSignIn () {
  const onFacebook = () => {
    alert('FB');
  };
  const onGoogle = () => {
    alert('Google');
  };
  const onApple = () => {
    alert('Apple');
  };
  return (
    <>
      <Buttons
          bgColor="#E7EAF4"
          fgColor="#4765A9"
          text="Continue with Facebook"
          onPress={onFacebook}
      />
      <Buttons
          text="Continue with Google"
          onPress={onGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
      />
      <Buttons
          text="Continue with Apple"
          onPress={onApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
      />
    </>
  )
}
