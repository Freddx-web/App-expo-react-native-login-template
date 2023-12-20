import React from 'react';
import {Text, View} from 'react-native';
import { LineChart } from "react-native-gifted-charts";

import { ptData } from '../../api/ApiCript/AreaChart.js'

const AreaChart = () => { 

    return (

    
    
    <LineChart
              areaChart
              data={ptData}
              rotateLabel
              width={300}
              hideDataPoints
              spacing={10}
              color="#00ff83"
              thickness={2}
              startFillColor="rgba(20,105,81,0.3)"
              endFillColor="rgba(20,85,81,0.01)"
              startOpacity={0.9}
              endOpacity={0.2}
              initialSpacing={0}
              noOfSections={6}
              maxValue={600}
              yAxisColor="white"
              yAxisThickness={0}
              rulesType="solid"
              rulesColor="gray"
              yAxisTextStyle={{color: 'gray'}}
              yAxisSide='right'
              xAxisColor="lightgray"
              pointerConfig={{
                pointerStripHeight: 160,
                pointerStripColor: 'lightgray',
                pointerStripWidth: 2,
                pointerColor: 'lightgray',
                radius: 6,
                pointerLabelWidth: 100,
                pointerLabelHeight: 90,
                activatePointersOnLongPress: true,
                autoAdjustPointerLabelPosition: false,
                pointerLabelComponent: items => {
                  return (
                    <View
                      style={{
                        height: 90,
                        width: 100,
                        justifyContent: 'center',
                        marginTop: -30,
                        marginLeft: -40,
                      }}>
                      <Text style={{color: 'white', fontSize: 14, marginBottom:6,textAlign:'center'}}>
                        {items[0].date}
                      </Text>
      
                      <View style={{paddingHorizontal:14,paddingVertical:6, borderRadius:16, backgroundColor:'white'}}>
                        <Text style={{fontWeight: 'bold',textAlign:'center'}}>
                          {'$' + items[0].value + '.0'}
                        </Text>
                      </View>
                    </View>
                  );
                },
              }}
            />
    

      );
};

export default AreaChart;