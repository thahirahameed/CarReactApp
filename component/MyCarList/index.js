import React from 'react';
import {Text, Image, View, FlatList, TouchableOpacity} from 'react-native';

const MyCarList = ({carList, handlePressItem}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handlePressItem(item)}>
      <View>
        <Text>Model Name: {item.modelName}</Text>
        <Text>Engine No: {item.engineNo}</Text>
        <Image source={{uri: item.image}} style={{width: 50, height: 50}} />
      </View>
    </TouchableOpacity>
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
