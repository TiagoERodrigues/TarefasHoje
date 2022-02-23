import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


const Task = (props) =>{
    return (
        <View style={styles.itens}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({

    itens:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },

    itemLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.5,
        borderRadius: 5,
    },
    itemText:{
        maxWidth: '80%',
        marginLeft: 20,
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },

});

export default Task;