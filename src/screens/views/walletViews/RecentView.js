import React from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar, View} from 'react-native';
import {Text, Divider } from '@rneui/themed';
import CountryFlag from "react-native-country-flag";
import { LinearGradient } from 'expo-linear-gradient';
import { PieChart } from "react-native-gifted-charts";

import { pieData, renderLegendComponent } from "../../chartKit/chart.js"
import  LineChartView  from '../walletViews/LineChart.js'

const RecentViews = () => {

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            flex: 1,
            paddingVertical: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
        >
          <Text style={{color: 'black', fontSize: 16, padding: 10, fontWeight: 'bold'}}>h6. Heading</Text>
          <Divider />
          <LinearGradient
            colors={['#040a23', '#191b27', '#191b27', '#2b323b', '#3c586d', '#05af4a91']} 
            style={styles.background}
          >
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Performance
            </Text>
            <View style={{padding: 20, alignItems: 'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                radius={90}
                innerRadius={60}
                innerCircleColor={'#232B5D'}
                centerLabelComponent={() => {
                  return (
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text
                        style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                        47%
                      </Text>
                      <Text style={{fontSize: 14, color: 'white'}}>USD</Text>
                      <CountryFlag isoCode="us" size={25} />
                    </View>
                  );
                }}
              />
            </View>
            {renderLegendComponent()}
          </LinearGradient>
        </View>


        <View
          style={{
            flex: 1,
            top:10,
            paddingVertical: 10,
            backgroundColor: '#fff',
            borderRadius: 5,
          }}
        >

        <Text style={{color: 'black', fontSize: 16, padding: 10, fontWeight: 'bold'}}>
          h6. Heading



       



        </Text>

        <LineChartView />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  background: {
    margin: 20,
    padding: 16,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default RecentViews;