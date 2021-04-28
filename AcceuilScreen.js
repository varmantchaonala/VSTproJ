import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function AcceuilScreen() {

    constructor(props){
        super(props)
    
        this.state = {
          username: '',
          password: '',
        }
      }

     const _handlePress = () => {
        console.log(this.state.username);
        console.log(this.state.password);
     }

    return (

        <View>

                <Text>
                Create Account
                </Text>

                <Text style={styles.textStyle}>
                    Stay with the actuality
                </Text>
                <TextInput
                    
                laceholder="Enter Your Scientific Link "  
                    onChangeText={(text) => this.setState({username:text})}
                 />

                 <Button 
                    onPress={() => this._handlePress()}
                    style={styles.buttonStyle}>
                    Submit
                 </Button>
        
        </View>
    )
}
