import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Home from './components/Home';
import Emergency from './components/Emergency';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName, iconColor, iconSize;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              iconColor = focused ? 'red' : 'white';
              iconSize = focused ? 35 : 30;
            }
            else if (route.name === 'Emergency') {
              iconName = focused ? 'alert' : 'alert-outline';
              iconColor = focused ? 'red' : 'white';
              iconSize = focused ? 35 : 30;
            }

            return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            height: 50,
            backgroundColor: '#0e2f59',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Emergency" component={Emergency} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

