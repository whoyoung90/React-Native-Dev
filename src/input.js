import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export const Input = () => {
    const [ userInput, setUserInput ] = useState('');

    const onChangeInput = (event) => {
        setUserInput(event)
    }

    return(
        <View style={styles.mainView}>
            <TextInput 
                value={userInput} 
                style={styles.input}
                onChangeText={onChangeInput}

                placeholder={'Type anything...'}
                multiline={true}
                maxLength={20}
                autoCapitalize={false}
                // editable={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:{
        width:'70%'
    },
    input:{
        backgroundColor:'#cecece',
        fontSize:25,
        padding:10
    }
})