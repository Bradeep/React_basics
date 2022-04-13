import React, { useState } from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'

const ColourScreen = () => {
    const [colour, setColour] = useState([])
    //console.log(colour)
    return <View>
        <Button title='Add a colour'
            onPress={() => {
                setColour([...colour, RandomRGB()])  //...array will take all the elements from array and we can assign a new value to it
            }} />
        <FlatList
            keyExtractor={(item) => item}
            data={colour}
            renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }} />
            }}
        />
    </View>
}

const RandomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColourScreen