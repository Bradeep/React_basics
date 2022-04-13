import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        //{ name: "friend 1", key: '1' },
        { name: "friend 1", age: "20" },
        { name: "friend 2", age: "40" },
        { name: "friend 3", age: "34" },
        { name: "friend 4", age: "27" },
        { name: "friend 5", age: "14" },
        { name: "friend 6", age: "56" },
        { name: "friend 7", age: "25" },
        { name: "friend 8", age: "22" },
        { name: "friend 9", age: "19" },

    ]
    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            //renderItem={(element) => {}}  
            //element contains object value and index
            //element === { item: {name: friend 1},
            //                  index: 0}

            renderItem={({ item }) => {         //item has been destructured from element
                return <Text style={styles.textStyle}>{item.name} - Age:{item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 20
    }
});

export default ListScreen