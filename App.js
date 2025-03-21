import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title/index'
import Main from './src/components/Main/index'

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <Main/>
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
