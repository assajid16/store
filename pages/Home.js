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


export default class Home extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
              backgroundColor= 'black'
              barStyle="light-content" 
            />

        <View style={styles.header}>
          <View>
            <Text style={styles.headerText}>Angkringan</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Favorit')}>
            <Image 
              style={styles.headerImage}
              source={require('../images/ikon/love.png')}
            />
            
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Pesan')}>
            <Image 
             style={styles.headerImage}
             source={require('../images/ikon/pesan.png')}
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

          <View style={styles.cari}>
             <Image 
             style={styles.srcImage}
             source={require('../images/ikon/cari.png')}
          />
          <TextInput
            placeholder='Cari Produk'
            placeholderTextColor='#B2BABB'
            autoCapitalize="none"
            style={styles.inputCari}/>
            <Image 
             style={styles.headerImage}
             source={require('../images/ikon/kamera.png')}
             />
              <Image 
             style={styles.headerImage}
             source={require('../images/ikon/mic.png')}
             />
         </View>

        <ScrollView style={styles.scroll}>

           <View style={styles.banner}>
              <Text style={styles.isiBanner}>
                Slide Show
              </Text>
            </View>

            <View style={styles.product}>
              <Text style={styles.isiProduct}>Macam-macam Produk</Text>
            </View>
        </ScrollView>

        <View style={styles.footer}>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
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

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Akun')}>
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
   backgroundColor:'#3498DB',
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
    fontSize: 25,
    paddingTop: 7,
    paddingLeft:0
  },
  headerImage:{
    width:20,
    height:20,
    alignSelf:'center',
    margin:10,
    marginTop: 15,
  },
  cari: {
 flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#6E7B79',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  srcImage:{
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  inputCari: {
    flex:1,
    // width: 200,
    // height: 40,
    // backgroundColor: 'white',
    // margin: 5,
    // padding: 8,
    // color: 'black',
    // borderRadius: 14,
    // fontSize: 15,
    // fontWeight: '100',
  },
  scroll:{
    flex: 1,
    marginBottom: 0,
    backgroundColor:'#AEB6BF',
  },

  banner:{
    flexWrap:'wrap',
    flexDirection:'column',
    backgroundColor: '#F2F3F4',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginLeft:5,
    padding:0,
    width:350,
    height: 130,
  },
  isiBanner:{
    color:'black',
    fontSize: 30,
    margin:100,
    fontWeight: '100'
  },
  product:{
     // flexDirection:'row',
    // flexWrap:'wrap',
    marginTop: 10,
    backgroundColor: '#A3E4D7',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    height: 500,

  },
  isiProduct:{
     color:'black',
    fontSize: 25,
    margin:40,
    fontWeight: '100'
  },

  footer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:7,
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
      