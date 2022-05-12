import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import useFibonacci from './useFibonacci';

import style from './style';

const App = () => {
  const {
    fibonacci,
    numberFibonacci,
    setNumberFibonacci,
    limit,
    setLimit,
  } = useFibonacci();

  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={style.marginBottom10}>Fibonacci</Text>
        <View style={style.content}>
          <TextInput
            style={[style.input, style.marginBottom10]}
            placeholder={'Type number'}
            keyboardType={'numeric'}
            value={limit}
            onChangeText={(e) => {
              setNumberFibonacci([]);
              setLimit(e);
            }}
          />
        </View>
        <View style={[style.row, style.marginBottom10]}>
          <TouchableOpacity
            onPress={() => {
              fibonacci();
            }}>
            <Text> PRINT </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setNumberFibonacci([]);
              setLimit('');
            }}>
            <Text> RESET </Text>
          </TouchableOpacity>
        </View>

        {numberFibonacci.length > 0 && <Text> Results: </Text>}

        <View style={style.row}>
          {numberFibonacci.map((item, index) => {
            return <Text key={index}> {item} </Text>;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
