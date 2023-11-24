import React, {useRef, useState, useEffect} from 'react';
import { View, useWindowDimensions, DrawerLayoutAndroid, Text,
  StyleSheet, SafeAreaView, ActivityIndicator, Animated } from 'react-native';
import { Layout} from "react-native-rapi-ui";
import { TabView, SceneMap } from 'react-native-tab-view';
import { Button} from '@rneui/themed';
import { FAB, Portal, PaperProvider } from 'react-native-paper';



export default function Dashboard({ navigation }) {
  
// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  loadingtext:{
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: "#000",
  }, 
  spinner: {
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
});


  // layout
  const layout = useWindowDimensions();

  // drawer 
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
    <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        color={'#4caf50'}
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
 );

// Loading Style
const [fetchedState,setFetchedState]=useState(null);
const [usersData,setUsersData]=useState([]);
useEffect(() => {
  setFetchedState('loading')
  setTimeout(()=>getData(),9000);
},[]);
const getData=async()=>{
  try{ //'https://jsonplaceholder.typicode.com/users'
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    setUsersData(data)
  }
  catch(error){
    console.log(error)
  }
  finally{
    setFetchedState(null);
  }
}
const DashboardView = () => {
  return (
    <PaperProvider>
      <Portal>
        <Button
          title="Outlog"
          icon={{
            name: 'bars',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          buttonStyle={{ backgroundColor: '#4caf50' }}
          titleStyle={{
            color: 'white',
            marginHorizontal: 20,
          }}
          onPress={() => drawer.current.openDrawer()} 
        />

      </Portal>
    </PaperProvider>
  )
} 

const fadeAnim = useRef(new Animated.Value(0)).current;
const fadeIn = () => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();
};

  return (
    <Layout>
      {
        fetchedState ? 
          <SafeAreaView style={styles.container}>
            <Text style={styles.loadingtext}>
              <ActivityIndicator style={styles.spinner} size="large" color="#00ff00" />
              {"\n"}
              {"\n"}
              Loading
            </Text> 
            
            <Animated.View  style={[ styles.fadingContainer,{ opacity: fadeAnim,},]}>
        <Text> By DalePlay</Text>
      </Animated.View>

          </SafeAreaView>  
        :
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}>
      
          <DashboardView />
        </DrawerLayoutAndroid>
      }
    </Layout>
  );
}