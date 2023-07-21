import React, {useState} from 'react';
import { View,
  SafeAreaView,ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import { List, IconButton, MD3Colors, DataTable,  } from 'react-native-paper';
import { Stack, ListItem, Avatar  } from "@react-native-material/core";
import Divider from 'react-native-divider';
import { Button } from '@rneui/themed';
import { Picker, Text, Section, SectionContent } from 'react-native-rapi-ui';
import { Icon } from 'react-native-elements'

const MenuView = () => {



  

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>    
        <View>
          {/*********************************/}
          <Text>Menu</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: 'aliceblue',
  },
  box: {
    width: 100,
    height: 100,
    padding: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#ddd',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    padding:5
  },
  selected: {
    backgroundColor: '#444',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 19,
    fontWeight: '500',
    color: '#000',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

  export default MenuView ;