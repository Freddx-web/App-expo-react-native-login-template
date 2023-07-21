
import React, { useEffect, useState } from "react";
import { Button, View, RefreshControl, StatusBar,
  SafeAreaView, ScrollView, StyleSheet, FlatList } from 'react-native';
import { TextInput, Text } from 'react-native-rapi-ui';
import Divider from 'react-native-divider';
import { Avatar, Card, } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


const SecondTab = () => {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  //========================================================//
  // API 
  //========================================================//
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await res.json();
    setCoins(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={{fontSize: 32, alignItems: 'center', justifyContent: 'center',}}>Cryptocurrency Markets{"\n"}</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Cripto"
        leftContent={
          <Ionicons name="search" size={20} color={'#ddd'} />
        }
        onChangeText={(text) => text && setSearch(text)}
      />
      <Divider /> 
      <Card>
        
        <Divider />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 10
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginTop: 30,
    marginHorizontal: 1,
  },
  cardtext: {
    fontSize: 19,
    color: "#000"
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 10,
  },
  list: {
    width: "100%",
    height: "90%",
    marginTop: 10,
    padding: 10
  },
  searchInput: {
    padding:10  },
});

export default SecondTab;