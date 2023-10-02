import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';

const cars = [];

// const [modelName, setModelName] = useState(props.modelName);
// const [engineNo, setEngineNo] = useState(props.engineNo);
const MyCarList = () => {
  return (
    <View>
      <FlatList
        data={props.userData}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'pink', margin: 10}}>
            <Text>{item.modelName}</Text>
            <Text>{item.engineNo}</Text>
            <Image>{item.image}</Image>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MyCarList;
