import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import PickUpScreen from './screens/PickUpScreen';
import CartScreen from './screens/CartScreen';


const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Pickup" component={PickUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})