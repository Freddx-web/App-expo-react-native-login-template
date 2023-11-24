import React, {useRef, useState, useEffect} from 'react';
import { View, Text,
    StyleSheet, SafeAreaView, ActivityIndicator, Animated } from 'react-native';
import { FAB, Portal, PaperProvider } from 'react-native-paper';
import { Button} from '@rneui/themed';

const PanelView = () => {
  return (
    <PaperProvider>
      <Portal>
        <Button
          title="Outlog"
          icon={{
            name: 'bars',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          buttonStyle={{ backgroundColor: '#4caf50' }}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
          onPress={() => drawer.current.openDrawer()} 
        />
        <Text>hello</Text>
      </Portal>
    </PaperProvider>
  )
} 

export default PanelView; 