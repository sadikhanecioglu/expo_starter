import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Dimensions } from 'react-native';
import ProductNavigation from './navigators/productNavigation';
import {configureStore} from './states/store'


export default function App() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log(windowWidth, "x", windowHeight)
  return (
    <Provider store={configureStore}>
      <ProductNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


