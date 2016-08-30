/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class mageApiTest extends Component {
  
  constructor(){
    super();
    this.state = {
      username : '',
      password : '',
      accessToken : ''
    }
  }

  getAllFromCategory(){

    
    var url = 'http://magentoapisever.store.magecloud.net/index.php/rest/V1/orders/items/000000003' 
    
    
    fetch(
    url,
    {
    method: 'GET',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer kunkejl1xkpupahvgpqyi53odwfrjkh9'
    }
    }
    )
    .then((res) => res.json())
    .then((data) => {
    //this.setState(data);
    console.log(data)
    //alert(data)
    })
    .catch((err) => {
    console.warn(err);
    });
  }



  getToken(){

    fetch(
    'http://magentoapisever.store.magecloud.net/index.php/rest/V1/integration/customer/token',
    {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    
    },
        body: JSON.stringify({
          "username":"abdulmuneer22@gmail.com",
          "password":"f24x7fcukfcuk"
        })

    }
    )
    .then((res) => res.json())
    .then((data) => {
    //this.setState(data);
    this.setState({
      accessToken : data
    })
    console.log(data)
    
    //alert(data)
    })
    .catch((err) => {
    console.warn(err);
    });
  }



  componentDidMount() {
    
    this.getAllFromCategory(4)
    //this.getToken()

	}
  
  
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Mage API Testing ..!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mageApiTest', () => mageApiTest);
