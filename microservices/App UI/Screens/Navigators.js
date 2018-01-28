import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home.js';
import Menu from './Menu.js';
import Comd from './Comd.js';
import Calendar from './Calendar.js';
import {DrawerNavigator,StackNavigator} from 'react-navigation';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Home/>
//     );
//   }
// }

export const Modal = StackNavigator({

    HomeM:{
      screen:Home
    },
    Command:{
      screen:Comd
    }
  },
  {
    headerMode:'none',
    mode:'modal',
    navigationOptions:{
      gesturesEnabled: true
      //header:'screen'
    }

})

export const MenuNavig = DrawerNavigator ({

    Home:{
      screen:Modal
    },
    Calendar:{
      screen:Calendar
    },
    Assignments:{
      screen:Modal
    },
    Timetable:{
      screen:Menu
    } 
  },
    {
      drawerWidth:330,
      contentComponent:Menu,
})


