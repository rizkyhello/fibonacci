import {useState} from 'react';
import {Alert} from 'react-native';

const useFibonacci = () => {
  const [numberFibonacci, setNumberFibonacci] = useState([]);
  const [limit, setLimit] = useState('');

  const fibonacci = () => {
    validate();

    let firstNumber = 0;
    let secondNumber = 1;

    const dataFibonacci = [];
    for (let i = 0; i < limit; i++) {
      const thirdNumber = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = thirdNumber;

      dataFibonacci.push(thirdNumber);
    }

    setNumberFibonacci(dataFibonacci);
  };

  const validate = () => {
    if (parseInt(limit) === 0 || limit === '') {
      let alertText;
      if (limit === '') {
        alertText = 'Please fill out fields!';
      }
      if (parseInt(limit) === 0) {
        alertText = 'Input must be more than 0!';
      }

      Alert.alert(alertText);

      return;
    }
  };

  return {
    fibonacci,
    numberFibonacci,
    setNumberFibonacci,
    limit,
    setLimit,
  };
};

export default useFibonacci;
