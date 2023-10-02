import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

const DetailsScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Image source={''} style={styles.imageStyle} />
      <Text
        value={props.modelName}
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
