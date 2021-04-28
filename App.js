// import React, {useState} from 'react'
// import { View, Text, TextInput, Button } from 'react-native'

// export default function App () {

   
    
//         this.state = {
//           username: '',
//           password: '',
//         }
//       }

//      const _handlePress = () => {
//         console.log(this.state.username);
//         console.log(this.state.password);
//      }

//     return (

//         <View>

//                 <Text>
//                 Create Account
//                 </Text>

//                 <Text style={styles.textStyle}>
//                     Stay with the actuality
//                 </Text>
//                 <TextInput
                    
//                 laceholder="Enter Your Scientific Link "  
//                     onChangeText={(text) => this.setState({username:text})}
//                  />

//                  <Button 
//                     onPress={() => this._handlePress()}
//                     style={styles.buttonStyle}>
//                     Submit
//                  </Button>
        
//         </View>
//     );
// }

// In App.js in a new project

import React ,{useState} from 'react';
import { Text, View, StyleSheet, ActivityIndicator , Button, TouchableOpacity, TextInput, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SearchBar from 'react-native-platform-searchbar';

import { WebView } from 'react-native-webview';
import { Card } from 'react-native-paper';
const LoadingIndicatorView = () =>{
    return <ActivityIndicator color='#009b88' size='large' />
  }
const ResultsScreen = ({ navigation }) => {
  return (
   <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://www.top500.org/' }}  
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
  );
}

const HomeScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#FAF7FF' }}>
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

       <Image source={require('./images/th29.jpeg')} style={{borderRadius:180, width:100, height:100}} />

    </View>
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{fontSize:28, fontWeight:'500', fontStyle:'italic'}} >Welcome to VSTproJ</Text>
                    <Text style={{fontSize:18}}>
                        Stay with the World
                    </Text>

                <Text style={{fontSize:24}}>
                    Technologic Actualities
                </Text>
                    
                    <TextInput
                        
                    laceholder="Enter Your Scientific Link "  
                        onChangeText={(text) => this.setState({username:text})}
                    />
                    
                    <SearchBar
                        value={value}
                        onChangeText={setValue}
                        placeholder="Search"
                        theme="light"
                        platform="ios"
                        
                    >
                    </SearchBar>

          <TouchableOpacity style={{backgroundColor:'green', width:'100%', alignItems:'center',justifyContent:'center' , height:35, margin:10,}} onPress={() => navigation.navigate('Results')} >
                <Text>Search </Text>
          </TouchableOpacity>

      </View>
  </View>
  );
}

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
  </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'V-ST§$' }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// import * as React from 'react';
// import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
// import { WebView } from 'react-native-webview';
// import { Card } from 'react-native-paper';
// const LoadingIndicatorView = () =>{
//     return <ActivityIndicator color='#009b88' size='large' />
//   }
// export default function App() {
//   return (
//    <WebView
//         originWhitelist={['*']}
//         source={{ uri: 'https://www.top500.org/' }}  
//         renderLoading={LoadingIndicatorView}
//         startInLoadingState={true}
//       />
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
// //import "./App.css";

// const gitHubUrl1 = "https://api.github.com/users/deekshasharma";
// const gitHubUrl2 = "https://www.top500.org/";

// function App() {
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     getGitHubUserWithFetch();
//   }, []);

//   const getGitHubUserWithFetch = async () => {
//     const response = await fetch(gitHubUrl2);
//     const jsonData = await response.json();
//     setUserData(jsonData);
//   };
//   return (
//     <View >
//       <View className="App-header">
//         <Text>GitHub User Data</Text>
//       </View>
//       <View>
//         <Text>{userData.name}</Text>
//         <Text>{userData.location}</Text>
//         <Text>{userData.blog}</Text>
//         <Text>{userData.company}</Text>
//       </View>
//     </View>
//   );
// }

// export default App;