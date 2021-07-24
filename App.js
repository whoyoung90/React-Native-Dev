import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import  { Header }  from './src/header';
import { Generator } from './src/generator';
import { Numlist } from './src/numlist';
import { Input } from './src/input'; // Input.js의 state값을 올려야하는 상황이 온다면 => "state"와 "관련 함수"만 App.js로 옮겨오면 된다!
import { PickerComponent } from './src/picker';

export default App = () => {
  const [ appName ] = useState('My first App');
  const [ random, setRandom ] = useState([]);

  const onNumAdd = () => {
    const randomNum = Math.floor(Math.random()*100) + 1
    setRandom(prevState => {
      return [...prevState, randomNum]
    })
  }

  const onNumDelete = (idx) => {
    setRandom(random.filter((_, num)=> {
      return idx !== num
    }))
  }

  return(
    <View style={styles.mainView}>
      <PickerComponent />

      <Header appName={appName} />

      <View>
        <Text style={styles.mainText} onPress={()=>alert('Text Press!')}>
          WooYoung's App
        </Text>
      </View>

      <Input />

      <Generator onNumAdd={onNumAdd}/>

      <ScrollView 
        style={{width:"50%", marginTop: 0}}
        // onMomentumScrollBegin={()=>alert('onMomentumScroll Begin')}
        // onMomentumScrollEnd={()=>alert('onMomentumScroll End')}
        // onScroll={()=>alert('onScroll')}        
        // onContentSizeChange={(width, height)=>alert(`width : ${width} | height : ${height}`)}        
        // bounces={false}
      >
        <Numlist random={random} onNumDelete={onNumDelete} />
      </ScrollView>
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
  },
})