import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';

const OrderScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView>
            <LottieView source={require("../assets/correct.json")} style={{ width: 390, height: 370, alignSelf: "center", marginTop: 30, justifyContent: "center" }} autoPlay loop={false} speed={0.5} />
            <Text style={{ marginTop: 40, fontSize: 19, fontWeight: "600", textAlign: "center" }}>Your Order has been Placed</Text>
            <TouchableOpacity style={{ marginTop: 150, borderColor: "gray", borderWidth: 2, width: 150, padding: 10, marginLeft: "auto", marginRight: "auto", borderRadius: 10 }} onPress={() => navigation.replace("Home")}>

                <Fontisto name="arrow-return-left" size={30} color="black" style={{ textAlign: "center", fontSize: 18, fontWeight: "500" }} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})