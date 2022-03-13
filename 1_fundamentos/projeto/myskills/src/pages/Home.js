import React from 'react';

//SafeAreaView serve para tirar o conteúdo da altura do notch do iPhone
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Deivid</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015'
    },
    title: {
        color: '#fff'
    }
});