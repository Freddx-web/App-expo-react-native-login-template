import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar, View
} from 'react-native';
import { Text, Stack } from "@react-native-material/core";

import { LinearGradient } from 'expo-linear-gradient';

import { PieChart } from "react-native-gifted-charts";

import { pieData, renderDot, renderLegendComponent } from "../chartKit/chart.js"

const RecentView = () => {



  return(
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

      <Stack m={4} spacing={4}>

        <Text variant="h6">h6. Heading</Text>



      </Stack>
        


      <View
      style={{
        flex: 1,
        paddingVertical: 100,
        backgroundColor: '#fff',
        borderRadius: 5,
      }}>




<LinearGradient
      // Background Linear Gradient 1
      // colors={['#fff','#fff','#fff','#fff','#00ff6887', '#2196f3']} 
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
                  <Text style={{fontSize: 14, color: 'white'}}>Excellent</Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent()}




        </LinearGradient>


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

export default RecentView;