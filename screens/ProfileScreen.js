import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { auth } from '../firebase';
import { signOut } from "firebase/auth"
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const navigation = useNavigation()
    const user = auth.currentUser
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login")
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Welcome <Text style={{ fontWeight: "600" }}>{user.email}</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }} onPress={signOutUser}>
                <AntDesign name="logout" size={24} color="black" />
                <Text style={{ marginLeft: 5 }}>Logout</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
}

export default ProfileScreen

const styles = StyleSheet.create({})