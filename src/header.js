import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export const Header = ({appName}) => {
    return(
        <TouchableOpacity style={styles.header} 
            // onPress={()=> alert('Touchable Opacity 😸')}
            onLongPress={()=> alert('Touchable Opacity 😸')}
            // onPressIn={()=> alert('Touchable Opacity 😸')}
            // onPressOut={()=> alert('Touchable Opacity 😸')}
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