import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<any, 'Profile'>;
  route: RouteProp<any, 'Profile'>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (route.params && route.params.counter !== undefined) {
      setCounter(route.params.counter);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sayaç: {counter}</Text>
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
});

export default ProfileScreen;
