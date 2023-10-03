import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

const DetailsScreen = item => {
  return (
    <View style={{flex: 1}}>
      <Image source={item.image} style={styles.imageStyle} />
      <Text>Model : {item.modelName}</Text>
      <Text>Engine No: {item.engineNo}</Text>
    </View>
  );
};
export default DetailsScreen;
