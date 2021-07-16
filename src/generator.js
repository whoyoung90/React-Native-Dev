import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export const Generator = ({onNumAdd}) => {
    return(
        <View style={styles.generator}>
            <Button title="Random Number" onPress={onNumAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    generator:{
        backgroundColor:'yellow',
        alignItems:'center',
        marginTop:20,
        padding:5,
        width:"50%"
    }
})