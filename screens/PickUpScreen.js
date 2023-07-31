import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import HorizontalDatepicker from '@awrminkhodaei/react-native-horizontal-datepicker';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const PickUpScreen = () => {
    const navigation = useNavigation()
    const cart = useSelector((state) => state.cart.cart)
    const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState([]);
    const [delivery, setDelivery] = useState([]);
    const deliveryTime = [
        {
            id: "0",
            name: "2-3 Days"
        },
        {
            id: "1",
            name: "3-4 Days"
        },
        {
            id: "2",
            name: "5-6 Days"
        },
        {
            id: "3",
            name: "Tommorow"
        }

    ];
    const times = [
        {
            id: "1",
            time: "11:00 PM"
        },
        {
            id: "2",
            time: "12:00 PM"
        },
        {
            id: "3",
            time: "1:00 PM"
        },
        {
            id: "4",
            time: "2:00 PM"
        },
        {
            id: "5",
            time: "3:00 PM"
        },

    ]
    const proceedToCart = () => {
        if (!selectedDate || !selectedTime || !delivery) {
            Alert.alert('Empty Cart', 'select all fields', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

        }
        if (selectedDate && selectedTime && delivery) {
            navigation.replace("Cart", { selectedTime: selectedTime, no_Of_days: delivery, pickUpDate: selectedDate })
        }
    }
    return (
        <>
            <SafeAreaView>
                <Text style={{ fontSize: 18, fontWeight: "600", marginHorizontal: 16 }}>Address:</Text>
                <TextInput style={{ borderWidth: 2, padding: 40, margin: 10, borderColor: "gray", borderRadius: 15 }} />
                <Text style={{ fontSize: 18, fontWeight: "600", marginHorizontal: 16 }}>Pickup date:</Text>

                <HorizontalDatepicker
                    mode="gregorian"
                    startDate={new Date('2023-08-20')}
                    endDate={new Date('2023-08-31')}
                    initialSelectedDate={new Date('2023-08-22')}
                    onSelectedDateChange={(date) => setSelectedDate(date)}
                    selectedItemWidth={170}
                    unselectedItemWidth={38}
                    itemHeight={38}
                    itemRadius={10}
                    selectedItemTextStyle={styles.selectedItemTextStyle}
                    unselectedItemTextStyle={styles.selectedItemTextStyle}
                    selectedItemBackgroundColor="#222831"
                    unselectedItemBackgroundColor="#ececec"
                    flatListContainerStyle={styles.flatListContainerStyle}
                />
                <Text style={{ fontSize: 18, fontWeight: "600", marginHorizontal: 16, marginTop: 9 }}>Select Time</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    {times.map((item, index) => (
                        <TouchableOpacity onPress={() => setSelectedTime(item.time)} key={index} style={selectedTime.includes(item.time) ? { margin: 10, padding: 10, borderWidth: 1, borderColor: "red", borderRadius: 10 } : { margin: 10, padding: 10, borderWidth: 1, borderColor: "black", borderRadius: 10 }}   >
                            <Text>{item.time}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Text style={{ fontSize: 18, fontWeight: "600", marginHorizontal: 16, marginTop: 9 }}>Delivery Date</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {deliveryTime.map((item, index) => (
                        <TouchableOpacity onPress={() => setDelivery(item.name)} key={index} style={delivery.includes(item.name) ? { margin: 10, padding: 10, borderWidth: 1, borderColor: "red", borderRadius: 10 } : { margin: 10, padding: 10, borderWidth: 1, borderColor: "black", borderRadius: 10 }}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

            </SafeAreaView>
            {total === 0 ? (
                null
            ) : (
                <TouchableOpacity style={{ backgroundColor: "#318CE7", padding: 10, marginBottom: 30, marginTop: "auto", margin: 15, borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>{cart.length} items | £ {total}</Text>
                        <Text style={{ fontSize: 13, fontWeight: "500", color: "white", marginVertical: 6 }}>Additional charges may apply</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: "white", borderRadius: 10 }} onPress={proceedToCart} >
                        <Text style={{ fontSize: 18, fontWeight: "600", padding: 10, }}>Cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            )}
        </>
    )
}

export default PickUpScreen

const styles = StyleSheet.create({})