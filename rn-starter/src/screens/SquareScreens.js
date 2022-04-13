//This is for same purpose as SquareScreen but this will use Reducers instead of useState

import React, { useReducer } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOR_VARIABLE = 15;

//This function can be within main function component but for our convenience and to avoid confusion between those 
//two states, we define it outside.

//state === { red:0, green:0, blue:0 }
//action === {colourToChnage:'red' || 'green' || 'blue',amount:15 || -15}

const reducer = (state, action) => {

    // console.log(state.green)

    switch (action.type) {

        case 'change_red':
            return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : { ...state, red: state.red + action.payload }
        //...state will just paste all the proprties of that state object.
        // Something like { red:0, green:0, blue:0 }
        case 'change_green':
            return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const SquareScreens = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state


    return <View>
        <ColourCounter
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_VARIABLE })}
            OnDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_VARIABLE })}
            colour='Red'
        />
        <ColourCounter
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_VARIABLE })}
            OnDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_VARIABLE })}
            colour='Green'
        />
        <ColourCounter
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_VARIABLE })}
            OnDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_VARIABLE })}
            colour='Blue'
        />

        <View
            style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}
        />

    </View>
}

const styles = StyleSheet.create({})

export default SquareScreens