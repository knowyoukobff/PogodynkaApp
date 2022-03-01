import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/HomePage';
import SecondPage from './pages/DetailsPage';

const App = createStackNavigator({
    HomePage: { screen: HomePage },
    DetailsPage: { screen: DetailsPage },
  },
  {
    initialRouteName: 'HomePage',
  }
);
export default createAppContainer(App);