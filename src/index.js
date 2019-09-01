import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import submitName from './components/submitName';

import useCharLimit from './hooks/useCharLimit';

const index = () => {
  const [name, setName] = useCharLimit('', 10);

  useEffect(() => {
    // alert('Rodou!');
  }, []);

  const handleButtonClick = () => {
    submitName(name, setName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Hooks</Text>

      <TextInput value={name} style={styles.input} onChangeText={setName} />

      <Button title="Enviar" onPress={handleButtonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
  },
  input: {
    width: 150,
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
});

export default index;
