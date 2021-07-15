import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const Numlist = ({random, onNumDelete}) => {
    return(
        random.map((el,idx)=>(
            <TouchableOpacity style={styles.numlist} key={idx} onPress={()=>onNumDelete(idx)}>
                <Text style={styles.numText}>{el}</Text>
            </TouchableOpacity>
        ))
    )
}

const styles = StyleSheet.create({
    numlist:{
        backgroundColor:'#cecece',
        alignItems:'center',
        marginTop:10,
        padding:5,
        width:"50%",
        borderRadius:50
    },
    numText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }
})