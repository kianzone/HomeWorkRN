import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, FlatList, TouchableHighlight, ScrollView, Image} from 'react-native';
import axios from 'axios';


export default class HomeScreen extends Component {

  state = {
    url:'https://reqres.in/api/users?page=2',
    url2:'http://dummy.restapiexample.com/api/v1/employees',
    results:[]
	}
	componentDidMount() {
		axios.get(this.state.url).then(res => {
      console.log(res.data.data );
			this.setState({ results: res.data.data });
		});
  }
  
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (        
      <View style={styles.container}>
        <ScrollView>          
          <FlatList  
            data={this.state.results} 
            renderItem={this._renderFuntion} 
            style={{marginTop: 20}}
          />
        </ScrollView>
        {/* <Button title="View Detail" onPress={() => this.props.navigation.navigate('DetailScreen')}></Button> */}
      </View>
    );
  }

  _renderFuntion=({item})=>{
      return (
        <TouchableHighlight 
            onPress={() => this.props.navigation.navigate('DetailScreen',{myString:item})}
            style={{margin: 10}}>
          <View style={{flexDirection:'row'}}>
            <View>
              <Image style={{ width:100 ,height:100, resizeMode:'contain',borderRadius: 50}} source={{uri:item.avatar}}></Image>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Text style={{margin: 10, fontSize: 24, color:'black'}}>{item.first_name} {item.last_name}</Text>
            </View>            
          </View>
        </TouchableHighlight>
      );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    margin: "1%",
    width: "100%"

  }
});
