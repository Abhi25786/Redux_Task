//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/Screens/Home/Home';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <Home />
      </Provider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
