import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import MyCarList from '../../components/MyCarList';
import styles from './styles';

const FirstScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={[]}
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
                <Text>test</Text>
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
