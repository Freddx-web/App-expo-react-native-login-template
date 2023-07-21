
import React, {useState, useEffect} from 'react';
import { Button, View, RefreshControl, 
  SafeAreaView, ScrollView, StyleSheet  } from 'react-native';
import { Text } from "react-native-rapi-ui";
import Divider from 'react-native-divider';
import { Avatar, Card } from 'react-native-paper';

const ThirdTab = () => {
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

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Text>Service</Text>
      <View style={{padding:10}}> 
        <Text style={{fontSize: 32}}>Service</Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        temporlpa qui officia deserunt mollit anim id est laborum.
        {"\n"}
        {"\n"}
        </Text>
        <Card>
          <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
          <Card.Content style={styles.cardContent}>
          <Text style={styles.cardtext}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.d est laborum.{"\n"}
          </Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/940' }} />
        </Card>
        <Divider />
        <Text >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
        </Text> 
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
  card: {
    flex: 0,
    marginTop: 20,
    marginHorizontal: 1,
  },
  cardtext: {
    fontSize: 19,
    color: "#000"
  },
});

export default ThirdTab;