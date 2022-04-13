import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 3,
        height: 200,
        // alignItems: 'flex-start',  //default: stretch
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    textOneStyle: {
        borderColor: 'red',
        borderWidth: 1,
        //margin: 20,
        flex: 1
    },
    textTwoStyle: {
        borderColor: 'red',
        borderWidth: 1,
        //margin: 20,
        flex: 1,
        alignSelf: 'center',  //to override alignItems from Parent
        ...StyleSheet.absoluteFillObject
        /* The above line is destructured as below
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0*/
    },
    textThreeStyle: {
        borderColor: 'red',
        borderWidth: 1,
        //margin: 20,
        flex: 3 //Add total flux and distribute the percentage
    }
})

export default BoxScreen