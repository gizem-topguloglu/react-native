import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Home'>;
};

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [counter, setCounter] = useState(0);



  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Welcome</Text>
      <View style={styles.buttonContainer}>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Increment Counter" onPress={incrementCounter} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to ProfileScreen" onPress={() => navigation.navigate('Profile', { counter })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 4,
  },
});

export default Home;
