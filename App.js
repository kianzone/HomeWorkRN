import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// import Screen
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';


const MainNavigator = createStackNavigator({
  HomeScreen:{
		screen:HomeScreen
	},
	DetailScreen:{
		screen:DetailScreen
	}
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
