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


export default class Penjual extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Akun Saya</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/setting.png')}
            />
            
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notif')}>
            <Image 
             style={styles.headerImage}
             source={require('../images/ikon/notif.png')}
            />
            </TouchableOpacity>

          
        </View>

        </View>
          
          <View style={styles.pilih}>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Saya')}> 
            <Text style={styles.pilihan}>Akun Pembeli</Text> 
           </TouchableOpacity>                
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Penjual')}>
              <Text style={styles.pilihan}>Akun Toko</Text> 
            </TouchableOpacity>      
          </View>    
        </View>

        <View style={styles.isi}>
            <Image 
              style={styles.judulImage}
              source={require('../images/ikon/market.png')}
            />
             <Text style={{color:'white', fontSize:25}}>Mulai dengan Angkringan</Text>
            <TouchableOpacity style={styles.btLogin} onPress={() => this.props.navigation.navigate('Toko')}>
                <Text style={{color:'#fff', marginTop: 10, fontSize:20}}>Daftar Toko</Text>
            </TouchableOpacity>
        <View style={{flexDirection:'row'}}>
        <Text style={{color:'white',marginRight:5, marginTop: 5, marginBottom:15, fontSize:15}}>Belum Mengerti?</Text>
            <TouchableOpacity>
                <Text style={{color:'red', marginTop: 5, marginBottom:15, fontSize:15}}>Pelajari</Text>
            </TouchableOpacity>
        </View>
        </View>




        <View style={styles.footer}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Beranda')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('../images/ikon/home.png')}
            />
            <Text style={styles.footerText}> Beranda </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Kategori')}>
            <View>
            <Image 
           style={styles.footerImage}
           source={require('../images/ikon/kategori.png')}
          />
          <Text style={styles.footerText}>Kategori</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Saldo')}>
            <View>
            <Image 
           style={styles.footerImage}
           source={require('../images/ikon/dompet.png')}
          />
          <Text style={styles.footerText}>Saldo</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Belanja')}>
            <View>
              <Image 
             style={styles.footerImage}
             source={require('../images/ikon/shop.png')}
            />
            <Text style={styles.footerText}>Belanja</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Pembeli')}>
            <View>
              <Image 
               style={styles.footerImage}
               source={require('../images/ikon/akun.png')}
              />
              <Text style={styles.footerText}>Akun</Text>
            </View>
          </TouchableOpacity>
            
           
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
  pilih: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: 'red',
    height: 50,
  },
   pilihan:{
     marginRight:50,
     marginLeft:50,
     marginTop:17
   },
  isi:{
   justifyContent:'center',
   alignItems:'center',
   marginTop: 0,
   backgroundColor: '#65777A',
   borderBottomWidth: 0,
   borderBottomColor: 'black',
   height: 470,
  },
  judulImage:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:17,
    marginRight:10,
    marginBottom:20
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
  footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#3498DB',
    height: 50,
  },
    footerImage:{
    width:20,
    height:20,
    alignSelf:'center'
  },
  footerText:{
    color:'black',
    fontSize: 12
  }

});
      