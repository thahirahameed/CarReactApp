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
    image: 'https://www.pexels.com/photo/black-audi-coupe-on-brown-road-38637/',
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

const onItemPress = item => {
  props.navigation.navigate('detailsScreen', {
    item,
  });
};

const FirstScreen = props => {
  const [myCarList, setMyCarList] = useState({carList});
  const [modelName, setModelName] = useState(props.route.params?.modelName);
  const [engineNo, setEngineNo] = useState(props.route.params?.engineNo);
  const [image, setImage] = useState(props.route.params?.image);

  // useEffect(() => {}, []);
  return (
    <SafeAreaView>
      <MyCarList
        carList={carList}
        handlePressItem={item => {
          props.navigation.navigate('detailsScreen', {item});
        }}
      />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          props.navigation.navigate('addRecordScreen', {
            myCarList,
            setMyCarList,
          });
        }}>
        <Text style={{color: 'white'}}>Add a record</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FirstScreen;
