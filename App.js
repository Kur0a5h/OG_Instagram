import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from 'react-native';
import {f, auth, db} from './config/config';


export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state = {
      loggedin: false
    };
    //this.registerUser('testemailaddress@gmail.com', 'fakepassword');
    var that = this;
    f.auth().onAuthStateChanged(function(user) {
      if(user){
        //logged in
        that.setState({
          loggedin: true
        });
        console.log('Logged in as', user);
      }else{
        //logged out
        that.setState({
          loggedin:false
        });
        console.log('Logged out');
      }
    });
  }

  loginUser = async(email, pass) => {

    if(email != '' && pass != ''){
      //
      try{
        let user = await auth.signInWithEmailAndPassword(email, pass);
        console.log(user);
      } catch(error){
        console.log(error);
      }
    }else{
      //if they are empty
      alert('Missing email or password');
    }

  }

  async logInWithFacebook (){

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      '821616618225428',
      { permissions: ['email', 'public_profile'] }
    );

      if(type === 'success'){
        const credentials = f.auth.FacebookAuthProvider.credential(token);
        f.auth().signInWithCredential(credentials).catch((error) => {
          console.log('Error...', error);
        })
      }
  }



  registerUser = (email, password) => {

    console.log(email, password);
    auth.createUserWithEmailAndPassword(email, password)
    .then((userObj) => console.log(email, password, userObj))
    .catch((error) => console.log('Error logging in:', error));

  }

    signUserOut = () => {
    auth.signOut()
    .then(() => {
      console.log('Logged out...');
    }).catch((error) => {
      console.log('Error:', error);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>-----</Text>
        { this.state.loggedin == true ? (
          <View>
            <TouchableHighlight
              onPress={ () => this.signUserOut() }
              style={{backgroundColor: 'red'}}>
              <Text>Log Out</Text>
            </TouchableHighlight>
            <Text>Logged in...</Text>
          </View>
        ) : (
          <View>

            { this.state.emailLoginView == true } (

              <View>
                <Text>Email:</Text>
                <TextInput
                  onChangeText={(text) => this.setState({email: text})}
                  value={this.state.email}
                />
                
                <Text>Password:</Text>
                <TextInput
                  onChangeText={(text) => this.setState({pass: text})}
                  secureTextEntry={true}
                  value={this.state.pass}
                />



              <TouchableHighlight
                onPress={ () => this.loginUser(this.state.email, this.state.password) }
                style={{backgroundColor: 'green'}}>
                <Text>Login</Text>
              </TouchableHighlight>

              </View>

            ) : (
              <View></View>
            )}
            
            <TouchableHighlight 
            onPress={() => this.setState({emailLoginView:true})}
            style={{backgroundColor: 'green'}}>
            <Text style={{color: 'white'}}>Login With Email</Text>
            </TouchableHighlight>

            <TouchableHighlight 
            onPress={() => this.logInWithFacebook()}
            style={{backgroundColor: 'blue'}}>
            <Text style={{color: 'white'}}>Login With Facebook</Text>
            </TouchableHighlight>

          </View>

      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
