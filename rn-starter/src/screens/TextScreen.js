import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [name, newName] = useState('')
    return <View>
        <Text>Enter some name:</Text>
        <TextInput
            style={styles.input}
            autoCapitalize='sentences'
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => newName(newValue)} />
        <Text>Your name is {name}</Text>
        {
            (name.length < 5) ?
                <Text style={{ color: 'rgb(200,0,0)' }}>Name should be atleast 5 characters long</Text> :
                null
        }
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }

})

export default TextScreen