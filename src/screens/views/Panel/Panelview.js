/**
 *  Panel View
 */

import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
// Tab
import RecentView from '../TabViews/Tab1/RecentView.js';
import ViewCripts from '../TabViews/Tab3/TabViewCript.js';

const PanelView = () => {
  const [index, setIndex] = React.useState(0);
  return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Mercado"
        titleStyle={{ fontSize: 12 }}
        icon={{ name:'trending-up', type: 'ionicon', color: 'white' }}
      />

      <Tab.Item 
        title="Mi billetera"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'wallet-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Criptos"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'logo-bitcoin', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Conversion"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cash-outline', type: 'ionicon', color: 'white' }}
      />
      
    </Tab>
    {/****************************************/}
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        
        <RecentView />

      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1>Tab 2</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        
          <ViewCripts /> 

      </TabView.Item>

      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1>Tab 4</Text>
        {/* <ViewCripts /> */ }

      </TabView.Item>
    </TabView>
    {/****************************************/}
  </>
);
};

export default PanelView; 