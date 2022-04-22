import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Market from './market';
import CoinDes from './coindes';
import SearchScreen from './searchscr';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {

    const Stack = createNativeStackNavigator();

    const TabScreen = () => {
        const Tab = createBottomTabNavigator();
        return (
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#aaa',
                    tabBarInactiveTintColor: '#444',
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopColor: '#000',
                        borderTopWidth: 1,
                        height: 60,
                    }
                }}>
                <Tab.Screen name="Market" component={Market}
                    options={{
                        tabBarLabel: 'Market',
                        tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size} />)
                    }} />
                <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (<Icon name="search" color={color} size={size} />)
                    }} />
            </Tab.Navigator>
        )
    }
    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Market">
                <Stack.Screen name="Home" component={TabScreen} options={{ headerShown: false }} />
                <Stack.Screen name="CoinDes" component={CoinDes} options={{
                    animationEnabled: true,
                    gestureEnabled: true,
                    headerShown: false, transitionSpec: {
                        open: config,
                        close: config,
                    },
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}



export default HomeScreen;