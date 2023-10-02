import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, Image} from 'react-native';
import MyCarList from '../../components/MyCarList';
import styles from './styles';
const DetailsScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Image source={MyCarList.Image} style={styles.imageStyle} />
      <TextInput
        value={modelName}
        defaultValue=" Model Name"
        onChangeText={changedText => {
          setModelName(changedText);
        }}
        style={textInputStyle}
      />

      <TextInput
        value={engineNo}
        defaultValue=" Engine Number"
        onChangeText={changedText => {
          setEngineNo(changedText);
        }}
        style={textInputStyle}
      />
    </View>
  );
};
export default DetailsScreen;
