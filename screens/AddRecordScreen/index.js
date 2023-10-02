import React, {useState, useEffect} from 'react';
import {Text, TextInput, Button, View} from 'react-native';

import styles from './styles';

const AddRecordScreen = props => {
  const [carList, setCarList] = useState('');

  const [modelName, setModelName] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {}, [props.modelName, props.engineNo]);

  return (
    <View style={{flex: 1, padding: 20, margin: 10}}>
      <TextInput
        defaultValue="Model Name"
        value={modelName}
        onChangeText={changedText => {
          setModelName(changedText);
        }}
        style={styles.textInputStyle}
      />

      <TextInput
        defaultValue="Engine Number"
        value={engineNo}
        onChangeText={changedText => {
          setEngineNo(changedText);
        }}
        style={styles.textInputStyle}
      />

      <TextInput
        defaultValue="Image Url"
        value={image}
        onChangeText={changedText => {
          setImage(changedText);
        }}
        style={styles.textInputStyle}
      />

      <Button
        onPress={() => {
          const newCar = {
            modelName: modelName,
            engineNo: engineNo,
            image: image,
          };
          setCarList([...carList, newCar]);
          props.navigation.goBack();
        }}
        style={styles.buttonStyle}
        title="Add Car"
        color="red"
      />
    </View>
  );
};

export default AddRecordScreen;
