import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

export const Input = () => {
    const [ userInput, setUserInput ] = useState('');
    const [ alphabet, setAlphabet ] = useState(['a', 'b', 'c']);

    const onChangeInput = (event) => {
        setUserInput(event)
      }
    
      const onAddTextInput = () => {
        setAlphabet(prevState => {
          return [...prevState, userInput]
        });
        setUserInput('') //  빈 입력값으로 초기화하기 위해
      }
    
    return(
        <View style={styles.inputView}>
            <TextInput 
                value={userInput} 
                style={styles.inputSubView}
                onChangeText={onChangeInput}

                placeholder={'Type anything...'}
                multiline={true}
                maxLength={20}
                autoCapitalize={false}
                // editable={false}
            />
            <Button title="Add Text Input" onPress={onAddTextInput} />
            <ScrollView>
                {
                alphabet.map((el, idx) => (
                    <Text style={styles.inputText} key={idx}>
                    {el}
                    </Text>
                ))
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    inputView:{
        width:'70%'
    },
    inputSubView:{
        backgroundColor:'#cecece',
        fontSize:25,
        padding:10
    },
    inputText:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        padding:10,
        margin:5,
        backgroundColor: 'green'
    }
})

// react-native의 data flow는 무조건 부모에서 자식! 
// 자식이 가지고 있던 데이터 값을 부모한테 보내줄 수가 없다. 
// => Input.js에서 생성된 state 값을 App.js로 넘겨줄 방법이 없다!
// 결국 Input.js를 사용하지 않고, 그 내용을 App.js로 복사해와서 사용