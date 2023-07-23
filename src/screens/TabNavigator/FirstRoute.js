import React, {useRef, useState} from 'react';
import { View, useWindowDimensions, DrawerLayoutAndroid, Text,
  StyleSheet, RefreshControl, SafeAreaView, ScrollView} from 'react-native';

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


         
          <Text>Panel</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. 
            {"\n"}
            {"\n"}
          </Text> 
      
           <ApiCard1 />


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
    },
    Title:{
      alignItems:'',
    }
  });


  export default FirstRoute;