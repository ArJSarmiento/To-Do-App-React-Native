import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todo, addTodo] = useState([
    { text: 'Learn React Native', key: '1' },
  ]);

  const pressHandler = (key) => {
    setTimeout(() => {
      addTodo(prevTodos => {
        return prevTodos.filter(todo => todo.key != key)
      })
    }, 500)
  }

  const submitHandler = (text) => {
    Keyboard.dismiss();
    addTodo(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={submitHandler} />
          <FlatList
            style={styles.list}
            data={todo}
            renderItem={
              ({ item }) =>
                <TodoItem item={item} pressHandler={pressHandler} />
            }
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    flex: 1,
    paddingBottom: 50,
    width: '90%',
  },
  list: {
    flex: 1,
    marginTop: 20
  }
});
