//Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native'; // import destructuring
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//Create a component
//App is root component, thats why we use AppRegistry
// most top level component
const App = () => ( // fat arrow function is saying its returning some variable or some object
   
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

//Render it to the device
//take App component and render it to the device
AppRegistry.registerComponent('albums', () => App);
