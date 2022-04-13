//the same component as CounterScreen but we are using reducer instead of useState
import React, { useReducer } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    if (action.type === 'increase_counter') {
        return { ...state, count: state.count + action.payload }
    }
    else if (action.type === 'decrease_counter') {
        return { ...state, count: state.count - action.payload }
    }
    return state;
}

const CounterScreen_reducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });  //passing the default value as 0
    return <View>
        <Button
            title='Increase'
            onPress={() => {
                dispatch({ type: 'increase_counter', payload: 1 })
            }}
        />
        <Button
            title='Decrease'
            onPress={() => {
                dispatch({ type: 'decrease_counter', payload: 1 })
            }}
        />
        <Text>Counter value: {state.count}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen_reducer