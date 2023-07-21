/**
 * 
 * https://www.youtube.com/watch?v=Oa7mmxJ0SDw
 * 
 */

import React, {useState, useEffect} from 'react';
import { View, RefreshControl, 
  SafeAreaView, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import { Text } from "react-native-rapi-ui";
import Divider from 'react-native-divider';
import { Avatar, Card } from 'react-native-paper';

import { ListItem } from '@rneui/themed';


const FirstTab = () => {
  //========================================================//
  // Control Refresh
  //========================================================//
  // Refresh Status
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Text>Config</Text>
        <View style={{padding:10}}> 
          <Text style={{fontSize: 32}}>FirstRoute</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. 
            {"\n"}
            {"\n"}
          </Text>
          <Divider />
          
          <Divider />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default FirstTab;
