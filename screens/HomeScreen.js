import { StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../ProductReducer';


const HomeScreen = () => {
	const cart = useSelector((state) => state.cart.cart)
	console.log(cart)
	const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location loading');
	const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
	useEffect(() => {
		checkIfLocatonEnabled();
		getCurrentLocation();
	}, []);

	const checkIfLocatonEnabled = async () => {
		let enabled = await Location.hasServicesEnabledAsync();
		if (!enabled) {
			Alert.alert('Location not enabled', 'Enable Location', [
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			]);
		} else {
			setLocationServiceEnabled(enabled);
		}
	};
	const getCurrentLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
			Alert.alert('Permission denied', 'Allow (Laundry) use your location', [
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel'
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') }
			]);
		}
		const { coords } = await Location.getCurrentPositionAsync(); //get lat and long of that particular user
		// console.log(coords);
		if (coords) {
			const { longitude, latitude } = coords;
			let response = await Location.reverseGeocodeAsync({
				longitude,
				latitude
			});
			// console.log(response);
			for (let item of response) {
				let address = `${item.name} ${item.city} ${item.postalCode}`;
				setDisplayCurrentAddress(address);
			}
		}
	};
	const product = useSelector((state) => state.product.product);
	const dispatch = useDispatch();
	useEffect(() => {
		if (product.length > 0) return;
		const fetchProducts = () => {
			services.map((service) => dispatch(getProduct(service)))
		};
		fetchProducts();
	}, []);

	const services = [
		{
			id: "1",
			image: "https://img.icons8.com/?size=2x&id=ZIVF0QYTfwVg&format=png",
			name: "Shirt",
			quantity: 0,
			price: 90,
		},
		{
			id: "2",
			image: "https://img.icons8.com/?size=2x&id=zahUGshfj0Yg&format=png",
			name: "Dress",
			quantity: 0,
			price: 100,
		},
		{
			id: "3",
			image: "https://img.icons8.com/?size=2x&id=MBqzh0SLQ7WZ&format=png",
			name: "Towel",
			quantity: 0,
			price: 150,
		},
		{
			id: "4",
			image: "https://img.icons8.com/?size=2x&id=37752&format=png",
			name: "Shorts",
			quantity: 0,
			price: 150,
		},
		{
			id: "5",
			image: "https://img.icons8.com/?size=2x&id=2ASLK79obvah&format=png",
			name: "Sneakers",
			quantity: 0,
			price: 150,
		},
		{
			id: "6",
			image: "https://img.icons8.com/?size=2x&id=105165&format=png",
			name: "T-shirt",
			quantity: 0,
			price: 150,
		},



	]
	return (
		<SafeAreaView>
			<View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
				<Entypo name="location" size={30} color="#318CE7" style={{ marginLeft: 5 }} />
				<View>

					<Text>{displayCurrentAddress}</Text>
				</View>

				<TouchableOpacity style={{ marginLeft: "auto", marginRight: 7 }}>
					<Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: "https://lh3.google.com/u/0/ogw/AGvuzYZHUKc1FlzPQOxq9SGLwkJvT_bjNZW0aaYEJwOm=s64-c-mo" }} />
				</TouchableOpacity>
			</View>
			<ScrollView>
				<Carousel />
				<View style={{ flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderRadius: 25, borderColor: "gray", margin: 20, padding: 15, alignItems: "Center" }}>
					<TextInput placeholder="Search for a particular item or shop" />
					<EvilIcons name="search" size={24} color="#318CE7" />
				</View>

				<Services />
				{product.map((service, index) => (
					<DressItem item={service} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>

	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
