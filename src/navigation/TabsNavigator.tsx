import React from 'react';
import { View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icons from '@expo/vector-icons/MaterialIcons'

export type TabsStackParamList = {
  Home: undefined;
  Cart: undefined;
  Payment: undefined;
  Profile: undefined;
}

const TabsStack = createBottomTabNavigator<TabsStackParamList>()

const TabsNavigator = () => {
  return (
    <TabsStack.Navigator screenOptions={{
      tabBarShowLabel: false
    }}>
      <TabsStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon(props) {
            return <Icons name="home" {...props}/>
          }
        }}
      />
      <TabsStack.Screen
        name="Cart"
        component={Example}
        options={{
          tabBarIcon(props) {
            return <Icons name="shopping-cart" {...props}/>
          }
        }}
      />
      <TabsStack.Screen
        name="Payment"
        component={Example}
        options={{
          tabBarIcon(props) {
            return <Icons name="account-balance-wallet" {...props}/>
          }
        }}
      />
      <TabsStack.Screen
        name="Profile"
        component={Example}
        options={{
          tabBarIcon(props) {
            return <Icons name="person" {...props}/>
          }
        }}
      />
    </TabsStack.Navigator>
  );
};

const Example = () => {
  return( <View />)
}

export default TabsNavigator;
