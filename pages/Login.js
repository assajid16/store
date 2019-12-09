import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button
  } from 'react-native';


const userinfo ={username: 'admin', password: 'admin'}


export default class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:''
    }
    this.masuk = this.masuk.bind(this)
  }

  pindah = () => {
    this.props.navigation.navigate('Beranda');
  };

 masuk() {
  console.log(this.state,'admin')
   if (this.state.username == userinfo.username && this.state.password == userinfo.password) {
      this.props.navigation.navigate('Beranda')
   } 
   else {
      alert('nama pengguna atau sandi salah.')
   }

 }

render(){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/kembali.png')}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Masuk</Text>                   
      </View>

    </View>

    <View style={styles.isi}>
    <Image 
              style={styles.judulImage}
              source={require('../images/ikon/user.png')}
            />
    <TextInput
        placeholder='Pengguna'
        underlineColorAndroid='white'
        placeholderTextColor='white'
        onChangeText={(username)=>this.setState({username})}
        value={this.state.username}
        autoCapitalize="none"
        style={styles.inputField}/>

      <TextInput
        placeholder='Sandi'
        underlineColorAndroid='white'
        placeholderTextColor='white'
        onChangeText={(password)=>this.setState({password})}
        value={this.state.password}
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.inputField}/>

      <TouchableOpacity style={styles.btLogin} onPress={this.masuk}>
        <Text style={{color:'#fff', marginTop: 10, fontSize:20}}>Masuk</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'white',marginRight:5, marginTop: 5, marginBottom:15, fontSize:15}}>Sudah Punya Akun?</Text>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
        <Text style={{color:'red', marginTop: 5, marginBottom:15, fontSize:15}}>Daftar</Text>
      </TouchableOpacity>
      </View>

    </View>

      

    </View>
    )
  }

}


const styles = StyleSheet.create({

  container : {
      flex:2,
      backgroundColor: 'white'
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#3498DB',
    height: 50,
  },
  headerText:{
    fontFamily: '',
    color:'black',
    fontSize: 15,
    paddingTop: 15,
    paddingLeft:0,
  },
  headerImage:{
    width:15,
    height:15,
    alignSelf:'center',
    marginTop:17,
    marginRight:10
  },
  judulImage:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:17,
    marginRight:10,
    marginBottom:20
  },

  isi:{
    flex:2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65777A'
  },

  inputField: {
    width: 280,
    color: 'white',
    borderColor: 'white',
  },
btLogin:{
  height:50,
  width: 300,
  marginRight:10,
  marginLeft:10,
  marginTop:30,
  backgroundColor: 'red',
  alignItems: 'center',

},
 

  
});