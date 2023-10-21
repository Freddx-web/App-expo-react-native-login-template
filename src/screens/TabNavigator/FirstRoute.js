import React, {useRef, useState} from 'react';
import { View, useWindowDimensions, DrawerLayoutAndroid, Text,
  StyleSheet, RefreshControl, SafeAreaView, ScrollView} from 'react-native';

import { Section, SectionContent } from "react-native-rapi-ui";

import { FAB } from 'react-native-paper';

import ApiCard1 from "../../api/ApiCard1"

  const FirstRoute = () => {
    // Refresch Control
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);
  
    // Loading


    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          
<Section style={styles.Section}>
          <SectionContent style={styles.SectionContent}>
          <Text style={{fontSize:40}}>Bienvenido 👤</Text>
           

            
         
          
</SectionContent>
          </Section>

        </ScrollView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 2,
      padding: 2
    },
    scrollView: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:50
    },
    Section:{
      
    },
    SectionContent:{
      width:400,
      height:700
    },
    Title:{
      alignItems:'',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });


  export default FirstRoute;