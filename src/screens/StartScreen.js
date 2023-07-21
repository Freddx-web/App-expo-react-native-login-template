import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native"

import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
/*
  const [fadeIn, setFadeIn] = useState(new Animated.Value(0));
  const [fadeInSlow, setFadeInSlow] = useState(new Animated.Value(0));

  React.useEffect(() => {

    Animated.timing(fadeIn,{
      toValue: 1,
      duration: 1000
    }).start();
    
    Animated.timing(fadeInSlow,{
      toValue: 1,
      duration: 2000
    }).start();
  }) */

  return (
    <Background>
      
      <Logo />

      
      <Header>Login Template</Header>
      

      
      <Paragraph>
        Una forma para iniciar y registrarse
      </Paragraph>
      


      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Iniciar session
      </Button>


      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarse
      </Button>
    </Background>
  )
}
