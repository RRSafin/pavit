import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function Main({ navigation }) {

    return (
        <View style={styles.main}>
            <Image style={styles.image} source={require('../assets/test.jpg')} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginLayout')}>
                <Text style={styles.text}>START</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 35,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: 'snow',
        borderColor: 'dodgerblue',
        borderWidth: 2,
        borderRadius: 30,
        width: 200,
        height: 60,
    },
    text: {
        fontSize: 32,
        color: 'dodgerblue',
        fontFamily: 'mt-bold'
    }
})