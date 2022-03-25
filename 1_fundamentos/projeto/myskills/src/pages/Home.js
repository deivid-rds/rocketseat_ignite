import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,

    //quando se clica nele, faz efeito de transparência
    TouchableOpacity
} from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Deivid</Text>

            <TextInput
                style={styles.input}
                placeholder="Nova skill"
                placeholderTextColor="#555"

            />

            <TouchableOpacity
                style={styles.button}

                //controlar a intensidade da opacidade (de 0 a 1)
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginTop: 50 }]}>
                My Skills
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 20,
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
});