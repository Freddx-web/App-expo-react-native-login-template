import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
//import LinearGradient from 'react-native-linear-gradient';

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {

  return (
    <Background>
      <Logo />
      <Header>DalePlay</Header>
      
      <Paragraph>
        Bienvenido
      </Paragraph>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Iniciar session
      </Button>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarse
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Dashboard')}
      >
        Dashboard
      </Button>

    </Background>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});