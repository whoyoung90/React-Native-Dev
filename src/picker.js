import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; //Picker는 따로 npm 설치가 필요하다

export const PickerComponent = () => {
  const [ country, setCountry ] = useState('usa');

  return(
    <View style={styles.container}>
      <Picker 
      style={{width: 250, height: 50}}
      selectedValue={country}
      onValueChange={(val, idx) =>   // 값이 이제 골라진다
        setCountry(val)
      }
      >
        <Picker.item label="Korea" value="korea" />
        <Picker.item label="USA" value="usa" />
        <Picker.item label="Japan" value="japan" />

      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center'
  }
})