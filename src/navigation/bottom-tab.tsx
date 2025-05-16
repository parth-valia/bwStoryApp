import { Image, Platform, View } from 'react-native';

import React from 'react';
import Icon from 'react-native-easy-icon';
import { IconType } from 'react-native-easy-icon/src/Icon';
import { Images } from '../constants/constants';
import AlertScreen from '../screens/AlertScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import LocationScreen from '../screens/LocationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UploadScreen from '../screens/UploadScreen';
import { Colors } from '../styles/colors';
/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { globalStyle } from '../styles/global-style';

type IconProps = {
  name: string;
  type: IconType;
};

export const BottomTab: React.FC = () => {
  const tabColor = Colors.white;
  const activeColor = Colors.dark_blue;
  const inactiveColor = Colors.gray;

  const Tab = createBottomTabNavigator();

  const tabs: {
    name: string;
    component: React.FC;
    tabBarIcon: IconProps;
  }[] = [
    {
      name: 'Discover',
      component: DiscoverScreen,
      tabBarIcon: {name: 'explore', type: 'material'},
    },
    {
      name: 'Location',
      component: LocationScreen,
      tabBarIcon: {name: 'location-outline', type: 'ionicon'},
    },
    {
      name: 'Upload',
      component: UploadScreen,
      tabBarIcon: {name: 'pluscircleo', type: 'antdesign'},
    },
    {
      name: 'Alert',
      component: AlertScreen,
      tabBarIcon: {name: 'bell', type: 'feather'},
    },
    {
      name: 'Profile',
      component: ProfileScreen,
      tabBarIcon: {name: 'file-tray-full', type: 'ionicon'},
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          height: 60,
          marginTop: 10,
        },
        tabBarStyle: {
          backgroundColor: tabColor,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
        tabBarIconStyle: {
          height: 30,
        },
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarShowLabel: false,
      }}>
      {tabs.map(tabProps => (
        <Tab.Screen
          key={tabProps.name}
          name={tabProps.name}
          component={tabProps.component}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style={globalStyle.center}>
                {tabProps?.name === 'Profile' ? (
                  <Image
                    source={Images.profile}
                    style={globalStyle.tabProfile}
                  />
                ) : (
                  <Icon
                    name={tabProps.tabBarIcon.name}
                    type={tabProps.tabBarIcon.type}
                    size={30}
                    color={focused ? Colors.dark_blue : Colors.gray}
                  />
                )}
                {focused && <View style={globalStyle.activeTabBorder} />}
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
