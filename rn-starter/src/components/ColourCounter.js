import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const ColourCounter = ({ colour, onIncrease, OnDecrease }) => {     //props.colour -> getting prop destructuring
    return <View>
        <Text>{colour}</Text>
        <Button
            onPress={() => onIncrease()}
            title={`Increase ${colour}`}
        />
        <Button
            onPress={() => OnDecrease()}
            title={`Decrease ${colour}`}
        />
    </View>
}

const styles = StyleSheet.create({

})

export default ColourCounter