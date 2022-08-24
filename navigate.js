import React from "react";
import {StyleSheet} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import LoginLayout from "./components/LoginLayout";
import Disconnect from "./components/Disconnect";


const Stack = createStackNavigator();

export default function Navigate() {

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Главная',
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTintColor: 'snow'

                }}
            />
            <Stack.Screen
                name="LoginLayout"
                component={LoginLayout}
                options={{
                    title: 'Авторизация',
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTintColor: 'snow'
                }}
            />
            <Stack.Screen
                name="Disconnect"
                component={Disconnect}
                options={{
                    title: 'Нет соединения',
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTintColor: 'snow'
                }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: 'dodgerblue',
        height: 60,
    },
    headerTitleStyle: {
        paddingLeft: 20,
        color: 'snow',
        textAlign: 'auto',
        fontWeight: '600'
    },
})