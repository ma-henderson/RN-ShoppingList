import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
const uuid = require('uuidv4');

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Butter'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Coffee'},
  ])

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(a => a.id != id)
    })
  }

  const addItem = (item) => {
    if (item.length <= 0) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Ok'}]);
    } else {
      setItems([
        {id: uuid(), text: item}, ...items
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}></AddItem>
      <FlatList 
        data={items}
        renderItem={({item}) => (
          
          <ListItem item={item} deleteItem={deleteItem}></ListItem>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;