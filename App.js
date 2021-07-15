import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import  { Header }  from './src/header';
import { Generator } from './src/generator';
import { Numlist } from './src/numlist';

export default App = () => {
  const [ appName ] = useState('My first App');
  const [ random, setRandom ] = useState([])

  const onNumAdd = () => {
    const randomNum = Math.floor(Math.random()*100) + 1
    setRandom(prevState => {
      return (
        [...prevState, randomNum]
      )
    })
  }

  const onNumDelete = (idxprops) => {
    const newArr = random.filter((_, index)=>{
      return idxprops !== index
    })
    setRandom(newArr)
  }

  return(
    <View style={styles.mainView}>
      <Header appName={appName}/>

      <View>
        <Text style={styles.mainText} onPress={()=>alert('Text Press!')}>
          WooYoung's App
        </Text>
      </View>

      <Generator onNumAdd={onNumAdd}/>

      <Numlist random={random} onNumDelete={onNumDelete} />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    paddingTop:50,
    alignItems:'center',
  },
  mainText:{
    fontSize:20,
    fontWeight:'bold',
    color:'blue',
    padding:20
  }
})