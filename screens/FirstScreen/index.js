import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

CarList = [
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

const FirstScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={[CarList]}
          keyExtractor={(item, index) => item.modelName}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('Details Screen', {
                    modelName: item?.modelName,
                    engineNo: item?.engineNo,
                    image: item?.image,
                  });
                }}>
                <Text></Text>
              </TouchableOpacity>
            );
          }}
        />

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            props.navigation.navigate('addRecordScreen');
          }}>
          <Text>Add a record</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstScreen;
