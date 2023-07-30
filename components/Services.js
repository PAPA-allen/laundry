import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
            id: "1",
            image: "https://img.icons8.com/?size=2x&id=1LiIg6xWByOk&format=png",
            name: "Washing"
        },
        {
            id: "2",
            image: "https://img.icons8.com/?size=2x&id=YTyxOVQcQ2kT&format=png",
            name: "Drying"
        },
        {
            id: "3",
            image: "https://img.icons8.com/?size=2x&id=EtSx5eGVIR2y&format=png",
            name: "Cleaning"
        },
        {
            id: "4",
            image: "https://img.icons8.com/?size=2x&id=5Eqc094XSKnY&format=png",
            name: "Ironing"
        },



    ]
    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 6 }}>Services We Offer:</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {services.map((service, index) => (
                    <TouchableOpacity style={{ margin: 10, borderWidth: 3, borderColor: "#E1EBEE", padding: 20, borderRadius: 20 }} key={index}>
                        <Image source={{ uri: service.image }} style={{ width: 70, height: 70, resizeMode: "contain" }} />
                        <Text style={{ textAlign: "center", marginTop: 6 }}>{service.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

export default Services

const styles = StyleSheet.create({})