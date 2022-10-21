// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostScreen from './src/Screens/PostScreen';
import DisplayScreen from './src/Screens/DisplayScreen';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'grey'}}>Post Data or Display Data</Text>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate('Post')}>
        <Text style={{color: 'black'}}>Post Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate('Display')}>
        <Text style={{color: 'black'}}>Display Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        <Stack.Screen name="Display" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Styles = StyleSheet.create({
  button: {
    backgroundColor: '#add8ff',
    padding: 12,
    paddingHorizontal: 18,
    margin: 12,
    borderRadius: 3,
  },
});

export default App;
