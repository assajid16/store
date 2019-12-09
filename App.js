import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ImageSlider from 'react-native-image-slider';
import Home_form from './pages/Home';
import Notif_nav from './pages/Notif';
import Pesan_nav from './pages/Pesan';
import Favorit_nav from './pages/Favorit';
import Akun_nav from './pages/Akun';
import Belanja_nav from './pages/Belanja';
import Saldo_nav from './pages/Saldo';
import Kategori_nav from './pages/Kategori';
import Login_nav from './pages/Login';
import Register_nav from './pages/Register';
import Beranda_nav from './pages/Beranda';
import Menu_nav from './pages/Menu';
import Saya_nav from './pages/Saya';
import Penjual_nav from './pages/Penjual';
import Setting_nav from './pages/Setting';
import Toko_nav from './pages/Toko';
import Deskripsi_nav from './pages/Deskripsi';
import Tokoku_nav from './pages/Tokoku';





const page = createStackNavigator({
  Home: Home_form,
  Notif: Notif_nav,
  Pesan: Pesan_nav,
  Favorit: Favorit_nav,
  Akun: Akun_nav,
  Belanja: Belanja_nav,
  Saldo: Saldo_nav,
  Kategori: Kategori_nav,
  Login: Login_nav,
  Register: Register_nav,
  Beranda: Beranda_nav,
  Menu: Menu_nav,
  Saya: Saya_nav,
  Penjual: Penjual_nav,
  Setting: Setting_nav,
  Toko: Toko_nav,
  Deskripsi: Deskripsi_nav,
  Tokoku: Tokoku_nav,

 
},
{
  headerMode : 'none' 
});

export default createAppContainer(page);