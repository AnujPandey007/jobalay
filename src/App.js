import React, { useState, useEffect } from 'react'
import Home from './screens/Home';
import Onboarding from './screens/onboardingScreen/Onboarding';
import Loading from './screens/loadingScreen/Loading';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GlobalStyleSheet from './constants/GlobalStyleSheet';

export default function App() {

  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('isViewed');

      if(value!==null){
        setViewedOnboarding(true);
      }
    }catch(e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, []);

  const Stack = createNativeStackNavigator();

  if(loading){
    return (<Loading/>);
  }else{
    if(viewedOnboarding){
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{...GlobalStyleSheet.customAppBarStyle, header: ()=> null}} >
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }else{
      return(
        <NavigationContainer>
          <Stack.Navigator screenOptions={{...GlobalStyleSheet.customAppBarStyle, header: ()=> null}} >
            <Stack.Screen name="Onboarding" component={Onboarding}/>
            <Stack.Screen name="Home" component={Home}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
