import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Welcome To React Demo!!!</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          props.navigation.navigate('Component')
        }}
      />
      <Button
        title='Go to Lists Demo'
        onPress={() => {
          props.navigation.navigate('List')
        }}
      />
      <Button
        title='Go to Image Demo'
        onPress={() => {
          props.navigation.navigate('Image')
        }}
      />
      <Button
        title='Go to Counter Demo'
        onPress={() => {
          props.navigation.navigate('Counter')
        }}
      />
      <Button
        title='Go to Colour Demo'
        onPress={() => {
          props.navigation.navigate('Colour')
        }}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => {
          props.navigation.navigate('Square')
        }}
      />
      <Button
        title='Go to Text Demo'
        onPress={() => {
          props.navigation.navigate('Text')
        }}
      />
      <Button
        title='Go to Box Demo'
        onPress={() => {
          props.navigation.navigate('Box')
        }}
      />
      {/* <TouchableOpacity onPress={() => { props.navigation.navigate('List') }}>
        <Text> Go to Lists Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
