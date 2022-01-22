import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler }) {
    const [checked, setChecked] = React.useState("circle");

    return (
        <TouchableWithoutFeedback >
            <View style={styles.item}>
                <TouchableOpacity onPress={() => {
                    setChecked("check-circle");
                    pressHandler(item.key);
                }}>
                    <Feather name={checked} size={24} color="coral" />
                </TouchableOpacity>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        marginLeft: 10,
    }
})