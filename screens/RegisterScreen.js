import { SafeAreaView, StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

const RegisterScreen = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const navigation = useNavigation()
    const register = () => {
        if (name === "" || email === "" || password === "" || phone === "") {
            Alert.alert('Invalid', 'Please fill all details', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("user credential", userCredential)
            const user = userCredential._tokenResponse.email;
            const myUserId = auth.currentUser.uid;

            setDoc(doc(db, "users", `${myUserId}`), {
                name: name,
                email: user,
                phone: phone
            })
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 10 }}>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", marginTop: 150, }}>
                    <Text style={{ fontSize: 19, color: "#0066b2", fontWeight: "600" }}>Sign Up</Text>
                    <Text style={{ fontSize: 17, marginTop: 10, fontWeight: "600" }}>Register your account</Text>
                </View>
                <View style={{ marginTop: 60 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20, marginTop: 20 }}>
                        <EvilIcons name="user" size={27} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={name} onChangeText={(text) => setName(text)} placeholder="enter your fullname here" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20, marginTop: 20 }}>
                        <EvilIcons name="envelope" size={27} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="enter your email here" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20, marginTop: 20 }}>
                        <Feather name="key" size={24} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="password" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20, marginTop: 20 }}>
                        <Feather name="phone" size={24} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={phone} onChangeText={(text) => setPhone(text)} placeholder="phone" style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <TouchableOpacity onPress={register} style={{ backgroundColor: "#002244", width: 220, padding: 15, marginLeft: "auto", marginRight: "auto", marginTop: 25, borderRadius: 20 }} >
                    <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontWeight: "500" }}>Register</Text>
                </TouchableOpacity>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={{ textAlign: "center", marginTop: 10, color: "gray" }}>Already have an Account?<Text style={{ color: "#011F5B" }}>  Login</Text> </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default RegisterScreen

const styles = StyleSheet.create({})