import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export const Header = ({appName}) => {
    return(
        <TouchableOpacity style={styles.header} 
            // onPress={()=> alert('Hi There!')}
            onLongPress={()=> alert('Hi There!')}
            // onPressIn={()=> alert('Hi There!')}
            // onPressOut={()=> alert('Hi There!')}
            >
            <View>
                <Text style={styles.headerText}>{appName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems:'center',
        padding:10,
        width:'100%' 
    },
    headerText:{
        fontSize:20,
        fontWeight:'bold'
    }
})