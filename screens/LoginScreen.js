import { KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center", padding: 10 }}>
            <KeyboardAvoidingView>
                <View style={{ alignItems: "center", marginTop: 150, }}>
                    <Text style={{ fontSize: 19, color: "#0066b2", fontWeight: "600" }}>Sign In</Text>
                    <Text style={{ fontSize: 17, marginTop: 10, fontWeight: "600" }}>Sign in to your account</Text>
                </View>
                <View style={{ marginTop: 60 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20 }}>
                        <SimpleLineIcons name="user" size={24} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="enter your username or email here" style={{ marginLeft: 10 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", margin: 5, borderWidth: 2, borderColor: "#0066b2", padding: 10, width: 350, borderRadius: 20, marginTop: 20 }}>
                        <Feather name="key" size={24} color="gray" />
                        <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>:</Text>
                        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} placeholder="password" style={{ marginLeft: 10 }} />
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: "#002244", width: 220, padding: 15, marginLeft: "auto", marginRight: "auto", marginTop: 25, borderRadius: 20 }} onPress={() => navigation.navigate("Home")}>
                    <Text style={{ color: "white", textAlign: "center", fontSize: 18, fontWeight: "500" }}>Login</Text>
                </TouchableOpacity>
                <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={{ textAlign: "center", marginTop: 10, color: "gray" }}>Don't have an Account?<Text style={{ color: "#011F5B" }}>  Sign Up</Text> </Text>
                </Pressable>

            </KeyboardAvoidingView>
        </SafeAreaView>

    )
}

export default LoginScreen

const styles = StyleSheet.create({})