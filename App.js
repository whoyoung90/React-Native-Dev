import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export const App = () => {
    return(
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.subView}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.anotherSubView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
      </View>
      )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'green',
    paddingTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  subView:{
    flex:1,
    backgroundColor:'yellow',
    marginBottom:10
  },
  anotherSubView:{
    flex:2,
    backgroundColor:'yellow',
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize:20,
    fontWeight:'bold',
    color:'red',
    padding:20
  }
})

export default App;