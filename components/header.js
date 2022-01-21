import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'coral',
        padding: 20,
        width: 100 + '%',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    }
})