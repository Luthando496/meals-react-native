import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import PreparingOrderScreen from './screens/PreparingOrderScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen } />
        <Stack.Screen name="Restaurant" component={RestaurantScreen } />
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen } />
        <Stack.Screen name="PreparingOrder" options={{presentation:'fullScreenModal'}}  component={PreparingOrderScreen } />
        <Stack.Screen name="Delivery"  component={DeliveryScreen } />
      </Stack.Navigator> 
      
    </NavigationContainer>
  )
}

export default Navigation
