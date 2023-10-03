import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';
import MyCarList from '../../component/MyCarList';

let carList = [
  {
    modelName: 'Audi',
    engineNo: 'KJIFAH123',
    image: 'https://unsplash.com/photos/Yp9FdEqaCdk',
  },
  {
    modelName: 'Honda',
    engineNo: 'KJIF45AH123',
    image: 'https://unsplash.com/photos/zE2VGbJSYns',
  },
  {
    modelName: 'BMW',
    engineNo: 'HYJIFH127',
    image: 'https://unsplash.com/photos/94lAQc7ipNg',
  },
];

const FirstScreen = () => {
  const [myCarList, setMyCarList] = useState({carList});
  useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <MyCarList carList={carList} />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.navigation.navigate('addRecordScreen');
        }}>
        <Text style={{color: 'white'}}>Add a record</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;
