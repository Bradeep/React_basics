import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import ColourCounter from '../components/ColourCounter'

const COLOR_VARIABLE = 15;

const SquareScreen = () => {

   const colourChange = (colour, difference) => {
      switch (colour) {
         case 'red':
            (red + difference > 255 || red + difference < 0) ? null : setRed(red + difference)
            return

         case 'green':
            (green + difference > 255 || green + difference < 0) ? null : setGreen(green + difference)
            return

         case 'blue':
            (blue + difference > 255 || blue + difference < 0) ? null : setBlue(blue + difference)
            return

         default:
            return
      }
   }

   const [red, setRed] = useState(0);
   const [green, setGreen] = useState(0);
   const [blue, setBlue] = useState(0);
   //console.log(red, blue, green)

   return <View>
      <ColourCounter
         onIncrease={() => colourChange('red', COLOR_VARIABLE)}
         OnDecrease={() => colourChange('red', -1 * COLOR_VARIABLE)}
         colour='Red'
      />
      <ColourCounter
         onIncrease={() => colourChange('green', COLOR_VARIABLE)}
         OnDecrease={() => colourChange('green', -1 * COLOR_VARIABLE)}
         colour='Green'
      />
      <ColourCounter
         onIncrease={() => colourChange('blue', COLOR_VARIABLE)}
         OnDecrease={() => colourChange('blue', -1 * COLOR_VARIABLE)}
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

export default SquareScreen