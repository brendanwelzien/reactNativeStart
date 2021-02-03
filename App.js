import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// var watchman = require('fb-watchman');
// var client = new watchman.Client();

// View --> UIView
export default function App() {
  return (
    <View style={styles.container}>
      <Text>What's Good Brendan!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
