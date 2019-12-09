import React from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {NavigationActions} from 'react-navigation'
import ImageSlider from 'react-native-image-slider';


export default class Akun extends React.Component {

 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/tutup.png')}
            />
            </TouchableOpacity>
            <Text style={styles.headerText}>Keuntungan Mendaftar</Text>                   
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu')}>
              <Text style={styles.headerText}>Menu Lain</Text>
            </TouchableOpacity>
                
          </View>

        </View>
        
        <View style={styles.banner}>                   
            <ImageSlider
                    loopBothSides
                autoPlayWithInterval={3000}
                images={[
                    '../images/produk/eiger.jpg',
                    '../images/produk/eiger.jpg',
                    '../images/produk/eiger.jpg',          
                ]}  
                style={{width:350, height: 250}}
            />              
        </View>


        <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={styles.btLogin}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={{fontSize: 12}}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btLogin}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={{fontSize: 12}}>Daftar Akun</Text>
            </TouchableOpacity>
        </View>
              


       
      </View>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 0,
    backgroundColor:'white',
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
     paddingLeft:0
   },
   headerImage:{
     width:15,
     height:15,
     alignSelf:'center',
     marginTop:17,
     marginRight:15
   },
   banner:{
    marginTop:50,
    marginLeft:0,
    padding:5,
    width:350,
    height: 250,
  },
   
   btLogin: {
    flex : 1,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 200,
    backgroundColor: '#3498DB',
    marginHorizontal : 20,
  },


})