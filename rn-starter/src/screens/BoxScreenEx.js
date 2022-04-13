import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const BoxScreenEx = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        borderWidth: 1,
        height: 200,
        // width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    viewOneStyle: {
        height: 100,
        width: 100,
        borderColor: 'red',
        borderWidth: 1,
        //margin: 20,
        //flex: 1
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        borderColor: 'red',
        borderWidth: 1,
        //position: 'absolute',
        // top: 100,
        // left: 150,
        //margin: 20,
        //flex: 1,
        alignSelf: 'flex-end',
        //...StyleSheet.absoluteFillObject
        backgroundColor: 'green'

    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        borderColor: 'red',
        borderWidth: 1,
        //position: 'absolute',
        //alignSelf: 'flex-end', 
        //margin: 20,
        //flex: 3
        backgroundColor: 'blue'
    }
})

export default BoxScreenEx