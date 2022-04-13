import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = 'Hi There!'
    //const greeting = {color: 'Red'} //Will not work as JS can't display in Text field
    //const greeting = <Text>{greeting}</Text>   //Assigning JSX to variable and will work

    const name = 'Bradeep Kumar'
    return (
        <View>
            <Text style={styles.textStyle}>This is a Basic React native page</Text>
            <Text style={styles.nameStyle}>Hi! My name is {name}</Text>
        </View>
    );
    //return <Text style={{ fontSize: 30 }}>This is Component's page</Text>;    //inline style

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;