import React, {useRef, useState, useEffect} from 'react';
import { View,
    StyleSheet, SafeAreaView, ActivityIndicator, Animated,View } from 'react-native';


import { Layout, TopNav } from 'react-native-rapi-ui';

const PanelView = () => {



  return (
    <Layout>
      <TopNav middleContent="Home" />
    </Layout>
  );
}

export default PanelView; 