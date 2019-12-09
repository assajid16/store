import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import {NavigationActions} from 'react-navigation';


export default class Deskripsi extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
        <View>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Tokoku')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/kembali.png')}
            />
            
            </TouchableOpacity>
        </View>
          <View>
            <Text style={styles.headerText}>Toko Saya</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/shop.png')}
            />
            
            </TouchableOpacity>
            <TouchableOpacity>
            <Image 
             style={styles.headerImage}
             source={require('../images/ikon/share.png')}
            />
            </TouchableOpacity>

          
        </View>

        </View>
          
          
         <View style={styles.isi}>
            <Image 
                  style={styles.judulImage}
                  source={require('../images/ikon/toko.png')}
                />
                <Text style={{color:'black', fontSize:20, marginRight:5, marginTop:25}}>Azkal Qolby</Text>
            </View>

            <View>
            <Text style={{color:'black', fontSize:20, marginRight:5, marginTop:25}}>Deskripsi Toko Anda</Text>
            </View>
        
            

      </View>
  

    )
  };
};

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
    fontSize: 20,
    paddingTop: 10,
    paddingLeft:0
  },
  headerImage:{
    width:20,
    height:20,
    alignSelf:'center',
    margin:10,
    marginTop:15,
  },
   scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AED6F1',
  },
  
  isi:{
   flexDirection:'row',
   marginTop: 0,
   backgroundColor: 'white',
   borderBottomWidth: 0,
   borderBottomColor: 'black',
   height: 70,
  },

  judulImage:{
    width:50,
    height:50,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    marginBottom:20
  },
 

});
      