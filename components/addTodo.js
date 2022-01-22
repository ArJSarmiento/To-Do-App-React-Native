import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function AddTodo({ addTodo }) {
    const [disabled, setDisabled] = React.useState(true);
    const [text, setText] = React.useState('');
    const changeHandler = (val) => {
        if (val.length === 0) {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
        setText(val);
    }

    return (
        <View>
            <TextInput
                value={text}
                style={styles.input}
                placeholder="New Todo"
                onChangeText={changeHandler}
            />
            <Button onPress={
                () => {
                    addTodo(text);
                    setText('')
                    setDisabled(true);
                }} title='Add Todo' color='coral' disabled={disabled} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#ddd',
    }
})