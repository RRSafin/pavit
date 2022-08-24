import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";

export default function LoginLayout() {

    return (
        <Formik initialValues={{password: '', email: ''}} onSubmit={(values, action) => {
            action.resetForm()
        }}>
            {props => (
                <View style={styles.container}>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.text}
                            value={props.values.email}
                            placeholder="Email"
                            placeholderTextColor="dodgerblue"
                            onChangeText={props.handleChange('email')}
                        />
                    </View>

                    <View style={styles.input}>
                        <TextInput
                            style={styles.text}
                            value={props.values.password}
                            placeholder="Пароль"
                            placeholderTextColor="dodgerblue"
                            secureTextEntry={true}
                            onChangeText={props.handleChange('password')}
                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotBtn}>Забыли пароль?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.loginBtn} onPress={props.handleSubmit}>
                        <Text style={styles.loginText}>ВОЙТИ</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: 'snow',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 2,
        borderColor: 'dodgerblue',
    },
    forgotBtn: {
        height: 30,
        marginBottom: 30,
        fontSize: 16,
        fontFamily: 'mt-semi',
        color: "dimgray"
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "dodgerblue",
    },
    text: {
        height: 50,
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    loginText: {
        fontSize: 24,
        color: 'snow',
        fontWeight: '400',
        fontFamily: 'mt-bold'
    }
})