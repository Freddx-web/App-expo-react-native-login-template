import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';

import RecentView from './RecentView.js';

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
        title="Recent"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Billetera"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'wallet', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="cart"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'cart', type: 'ionicon', color: 'white' }}
      />

<Tab.Item
        title="--- "
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'dolar', type: 'ionicon', color: 'white' }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <RecentView />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1>Favorite</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1>Cart</Text>
      </TabView.Item>
      
      <TabView.Item style={{ backgroundColor: '#afdce133', width: '100%' }}>
        <Text h1> -- -- </Text>
      </TabView.Item>

    </TabView>
  </>
);
};

export default PanelView; 