import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';

const MyCarList = ({carList}) => {
  const renderItem = ({item}) => (
    <View
      style={{
        margin: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
      }}>
      <Text>Model Name: {item.modelName}</Text>
      <Text>Engine No: {item.engineNo}</Text>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
    </View>
  );

  return (
    <FlatList
      data={carList}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default MyCarList;
