
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;


  return(
    <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
    //placeholder
    placeholder={placeholder}
    //password to be hidden with *
    secureTextEntry={secureTextEntry}
    style={inputStyle}
    value={value}
    onChangeText={onChangeText}
    //disable autocorrect property(in ios only it will display)
autoCorrect={false}
    />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height:50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }



};

export { Input };
