// import * as React from 'react';
import React, {useState, useEffect} from 'react';

import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import {CustomHeader, CustomDrawerContent} from './src'
import {HomeScreen, HomeScreenDetail, SettingsScreen, SettingsScreenDetail} from './src/tab'
import {ProfileScreen} from './src/drawer/ProfileScreen'
import {RegisterScreen} from './src/auth'
import LoginScreen from './src/auth/LoginScreen'
import OnboardingScreen from './src/auth/OnboardingScreen'

import {IMAGE} from './src/constants/Image'

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

const StackHome = createStackNavigator()

function HomeStack({navigation, route}) {
  if (route.state && route.state.routeNames[route.state.index] === "HomeDetail" ) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator()

function SettingStack({navigation, route}) {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({tabBarVisible: false})
  } else {
    navigation.setOptions({tabBarVisible: true})
  }
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler}/>
    </StackSetting.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? IMAGE.ICON_HOME
                : IMAGE.ICON_HOME_BLACK;
            } else if (route.name === 'Settings') {
              iconName = focused ? 
              IMAGE.ICON_SETTINGS 
              : IMAGE.ICON_SETTINGS_BLACK;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{width: 20, height: 20}} 
            resizeMode="contain"/>;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#176e52',
          inactiveTintColor: 'black',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="MenuTab" 
      drawerContent={() => <CustomDrawerContent navigation={navigation}/>}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const StackApp = createStackNavigator()

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  let routeName;

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }
  return (
    <NavigationContainer>
        <StackApp.Navigator initialRouteName={routeName}>
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
          <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding" component={OnboardingScreen} options={navOptionHandler}/>

        </StackApp.Navigator>
    </NavigationContainer>
  );
}