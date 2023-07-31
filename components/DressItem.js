import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../CartReducer';
import { decrementQty, incrementQty } from '../ProductReducer';

const DressItem = ({ item }) => {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    const addItemToCart = () => {
        dispatch(addToCart(item))
        dispatch(incrementQty(item));
    }
    return (
        <View style={{ flexDirection: "row", backgroundColor: "#F8F8F8", borderRadius: 8, padding: 10, alignItems: "center", justifyContent: "space-between", margin: 14 }}>
            <View>
                <Image source={{ uri: item.image }} style={{ width: 70, height: 70, resizeMode: "contain" }} />
            </View>
            <View>
                <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "500" }}>{item.name}</Text>
                <Text>£{item.price}</Text>
            </View>
            {cart.some((c) => c.id === item.id) ? (
                <TouchableOpacity style={{ flexDirection: "row", paddingHorizontal: 10, paddingVertical: 5 }}>
                    <TouchableOpacity onPress={() => {
                        dispatch(decrementQuantity(item))
                        dispatch(decrementQty(item))
                    }} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ fontSize: 19, color: "#088F8F", paddingHorizontal: 6, fontWeight: "600", textAlign: "center" }}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={{ fontSize: 19, color: "#008F8F", paddingHorizontal: 8, fontWeight: "600" }}>{item.quantity}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        dispatch(incrementQuantity(item))
                        dispatch(incrementQty(item))
                    }} style={{ width: 26, height: 26, borderRadius: 13, borderColor: "#BEBEBE", backgroundColor: "#E0E0E0", justifyContent: "center", alignContent: "center" }}>
                        <Text style={{ fontSize: 20, color: "#088F8F", paddingHorizontal: 6, fontWeight: "600", textAlign: "center" }}>+</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={addItemToCart} style={{ width: 40, padding: 2 }}>
                    <Ionicons name="ios-add-circle-outline" size={35} color="#088F8F" />
                </TouchableOpacity>
            )}

        </View>
    )
}

export default DressItem

const styles = StyleSheet.create({})