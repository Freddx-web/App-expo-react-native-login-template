import React, { useContext } from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar, View } from 'react-native';
import { Text, Stack } from "@react-native-material/core";
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from "react-native-gifted-charts";
import { pieData, renderDot, renderLegendComponent } from "../../../chartKit/chart.js"
import CountryFlag from "react-native-country-flag";
import { FAB, Portal, PaperProvider, AnimatedFAB } from 'react-native-paper';
import { Divider, useTheme } from '@rneui/themed';

const RecentView = () => {

  const { theme } = useTheme();  

  return( 
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/****************************************/}
        <Text style={styles.subHeader}>Mercado</Text>
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Horizontal Divider</Text>
          <Divider />
          <Text style={styles.horizontalText}>
            Horizontal Divider with width and color
          </Text>
        </View>
        {/****************************************/}
        <Text style={styles.subHeader}>Horizontal Divider with Inset</Text>
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>
            Horizontal Divider with left inset
          </Text>
          <Divider inset={true} />
          <Text style={styles.horizontalText}>
            Horizontal Divider with right inset
          </Text>
          <Divider inset={true} insetType="right" />
          <Text style={styles.horizontalText}>
            Horizontal Divider with middle inset
          </Text>
          <Divider inset={true} insetType="middle" />
          <Text style={styles.horizontalText}>Welcome to RNE App</Text>
        </View>
        {/****************************************/}
        <Text style={styles.subHeader}>Vertical Dividers</Text>
        <View style={styles.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" />
          <Text>Right text</Text>
        </View>
        <View style={styles.vertical}>
          <Text>Left text</Text>
          <Divider orientation="vertical" width={5} />
          <Text>Right text</Text>
        </View>
        {/****************************************/}
        <Text style={styles.subHeader}>Dividers with SubHeader</Text>
        <View style={styles.horizontal}>
          <Text style={styles.horizontalText}>Left text</Text>
          <Divider
            subHeader="Divider"
            inset={true}
            subHeaderStyle={{ color: theme?.colors?.primary }}
          />
          <Text style={styles.horizontalText}>Right text</Text>
        </View>
        {/****************************************/}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingTop: StatusBar.currentHeight,
  },
  view:{
    flex: 1,paddingVertical:100,
    backgroundColor: '#fff',borderRadius: 5,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  background: {
    margin: 20,padding: 16,borderRadius: 20,
  },
  subHeader: {
    backgroundColor : "#2089dc",color : "white",
    textAlign : "center",paddingVertical : 5,marginBottom : 10
  },
  horizontal: {
    flex: 1,paddingVertical:100,
    backgroundColor: '#fff',borderRadius: 5,marginBottom: 10,
  },
  horizontalText: {
    textAlign: 'center',fontSize: 16,marginVertical: 10,
  },
  vertical: {
    flex: 1,marginBottom: 10,
    display: 'flex',flexDirection: 'row',
    justifyContent: 'space-evenly',paddingVertical:10,
    backgroundColor: '#fff',borderRadius: 5,
  },
  divider:{
    margin: 16,padding: 5 
  },
  text: {
    fontSize: 16,
  },

});

export default RecentView;