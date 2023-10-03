import React, {useState, useEffect} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import styles from './styles';

const AddRecordScreen = props => {
  const {carList, setCarList} = props.route.params;
  const [modelName, setModelName] = useState('');
  const [engineNo, setEngineNo] = useState('');
  const [image, setImage] = useState('');

  //useEffect(() => {}, [props.modelName, props.engineNo, props.image]);

  return (
    <View style={{flex: 1, padding: 20, margin: 10}}>
      <TextInput
        defaultValue="Model Name"
        onChangeText={changedText => {
          setModelName(changedText);
        }}
        style={styles.textInputStyle}
      />

      <TextInput
        defaultValue="Engine Number"
        onChangeText={changedText => {
          setEngineNo(changedText);
        }}
        style={styles.textInputStyle}
      />

      <TextInput
        defaultValue="Image Url"
        onChangeText={changedText => {
          setImage(changedText);
        }}
        style={styles.textInputStyle}
      />

      <Button
        onPress={() => {
          if (modelName || engineNo || image) {
            setCarList([
              ...carList,
              {
                modelName: modelName,
                engineNo: engineNo,
                image: image,
              },
            ]);
          }
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
