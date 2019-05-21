import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

import Component1 from '../components/Component1';


export default class DetailScreen extends Component {
  
  static navigationOptions = {
    title: 'Detail',
  };
  state = {
    results:[]
	}
  componentDidMount() {
    let results = this.props.navigation.state.params.myString;
    this.setState({ results: results });
    console.log(results);
  } 
  render() {
    return (
      <View style={styles.container}>
        <Component1 someFunction={this.DoAlert}
        text={this.state.results.first_name} 
        text2={this.state.results.last_name}
        id={this.state.results.id} 
        email={this.state.results.email}
        img={source={uri:this.state.results.avatar}}></Component1>
      </View>
    );
  }

  DoAlert=(results)=>()=>{
    alert(this.state.results.id);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
