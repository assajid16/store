import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'


export default class Register extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/kembali.png')}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Daftar</Text>                   
          </View>

        </View>

        <View style={styles.isi}>
        <Image 
              style={styles.judulImage}
              source={require('../images/ikon/reg.png')}
            />
        <TextInput
          style={styles.input}
          placeholder='Pengguna'
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
       
        />
        <TextInput
          style={styles.input}
          placeholder='Sandi'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
        />
        <TextInput
          style={styles.input}
          placeholder='Email/No.Hp'
          autoCapitalize="none"
          placeholderTextColor='white'
          underlineColorAndroid='white'
        />
        </View>

        <View>
        <TouchableOpacity 
              style={styles.btn} 
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 20,color:'#fff',marginTop:10}}>Buat Akun</Text>
          </TouchableOpacity>

        </View>

        
  
         
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#65777A'
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
    marginRight:120
  },
  isi:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#65777A'
  },
  judulImage:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:5,
    marginRight:10,
    marginBottom:20
  },

  input: {
    width: 280,
    color: 'white',
    borderColor: 'white',
  },

  btn: {
    height:50,
    marginRight:10,
    marginLeft:10,
    marginBottom:20,
    backgroundColor: 'red',
    alignItems: 'center',
  },
 
})