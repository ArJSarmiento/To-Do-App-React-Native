import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';
import Header from './components/header';

export default function App() {
  const [todo, addTodo] = useState([
    { text: 'Learn React Native', key: '1' },
  ]);

  return (
    <View style={styles.container}>
      <Header />

      <TextInput style={styles.textInput} />
      <Button
        onPress={() => { }}
        title="Add"
        color="#841584"
      />

      <FlatList
        data={todo}
        renderItem={
          ({ item }) =>
            <Text>{item.text}</Text>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  item: {
    padding: 30,
    marginTop: 24,
    fontSize: 24,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
  textInput: {

  }
});
