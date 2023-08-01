import { StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Entypo, EvilIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import DressItem from '../components/DressItem';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../ProductReducer';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';


const HomeScreen = () => {
	const navigation = useNavigation();
	const cart = useSelector((state) => state.cart.cart)
	const total = cart.map((item) => item.quantity * item.price).reduce((curr, prev) => curr + prev, 0)
	console.log(cart)
	const [items, setItems] = useState([])
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
		const fetchProducts = async () => {
			const colRef = collection(db, "types");
			const docSnap = await getDocs(colRef)
			docSnap.forEach((doc) => {
				items.push(doc.data());
			});
			items?.map((service) => dispatch(getProduct(service)))
		};
		fetchProducts();
	}, []);

	const services = [
		{
			id: "1",
			image: "https://img.icons8.com/?size=2x&id=ZIVF0QYTfwVg&format=png",
			name: "Shirt",
			quantity: 0,
			price: 10,
		},
		{
			id: "2",
			image: "https://img.icons8.com/?size=2x&id=zahUGshfj0Yg&format=png",
			name: "Dress",
			quantity: 0,
			price: 10,
		},
		{
			id: "3",
			image: "https://img.icons8.com/?size=2x&id=MBqzh0SLQ7WZ&format=png",
			name: "Towel",
			quantity: 0,
			price: 20,
		},
		{
			id: "4",
			image: "https://img.icons8.com/?size=2x&id=37752&format=png",
			name: "Shorts",
			quantity: 0,
			price: 15,
		},
		{
			id: "5",
			image: "https://img.icons8.com/?size=2x&id=2ASLK79obvah&format=png",
			name: "Shoes",
			quantity: 0,
			price: 10,
		},
		{
			id: "6",
			image: "https://img.icons8.com/?size=2x&id=105165&format=png",
			name: "T-shirt",
			quantity: 0,
			price: 10,
		},



	]
	return (
		<>
			<View style={{ flexDirection: "row", alignItems: "center", padding: 10, marginTop: 50 }}>
				<Entypo name="location" size={30} color="#318CE7" style={{ marginLeft: 5 }} />
				<View>

					<Text>{displayCurrentAddress}</Text>
				</View>

				<TouchableOpacity style={{ marginLeft: "auto", marginRight: 7 }} onPress={() => navigation.navigate("Profile")}>
					<Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: "https://lh3.google.com/u/0/ogw/AGvuzYZHUKc1FlzPQOxq9SGLwkJvT_bjNZW0aaYEJwOm=s64-c-mo" }} />
				</TouchableOpacity>
			</View>
			<ScrollView >
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
			{total === 0 ? (
				null
			) : (
				<TouchableOpacity style={{ backgroundColor: "#318CE7", padding: 10, marginBottom: 30, margin: 15, borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
					<View>
						<Text style={{ fontSize: 15, fontWeight: "600", color: "white" }}>{cart.length} items | £ {total}</Text>
						<Text style={{ fontSize: 13, fontWeight: "500", color: "white", marginVertical: 6 }}>Additional charges may apply</Text>
					</View>
					<TouchableOpacity style={{ backgroundColor: "white", borderRadius: 10 }} onPress={() => navigation.navigate("Pickup")}>
						<Text style={{ fontSize: 18, fontWeight: "600", padding: 10, }}>pickup</Text>
					</TouchableOpacity>
				</TouchableOpacity>
			)}

		</>

	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
