import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export default function Disconnect() {
    return (
        <View>
            <View style={styles.headerStyle}>
                <Text style={styles.headerTitleStyle}>Нет соединения</Text>
            </View>
            <View style={styles.mainContainer}>
                <Image style={styles.image} source={require('../assets/disc.jpg')}/>
                <Text style={styles.text}>Нет соединения</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'coral',
        height: 60,
        justifyContent: 'center'
    },
    headerTitleStyle: {
        color: 'snow',
        fontWeight: '600',
        fontSize: 24,
        textAlign: 'center'
    },
    mainContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 140,
        marginBottom: 20,
        marginTop: 200
    },
    text: {
        fontSize: 32,
        color: '#333',
        fontFamily: 'mt-bold',
        marginTop: 20
    }
})