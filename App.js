import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todo, addTodo] = useState([
    { text: 'Learn React Native', key: '1' },
  ]);

  const pressHandler = (key) => {
    addTodo(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    addTodo(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo addTodo={submitHandler} />
        <FlatList
          data={todo}
          renderItem={
            ({ item }) =>
              <TodoItem item={item} pressHandler={pressHandler} />
          }
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
  },
  item: {
    padding: 30,
    marginTop: 24,
    fontSize: 24,
    marginHorizontal: 20,
    backgroundColor: 'pink',
  },
  content: {
    width: '90%',
  }
});
