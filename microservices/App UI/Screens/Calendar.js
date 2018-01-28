import React from 'react';
import {StyleSheet ,Text ,View ,AppRegistry ,TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Calendar extends React.Component {
  openModal()
  {
    this.props.navigation.navigate('Command');
    //console.log('Hey I am here');
  }

  

  render() {
    return (
      <View style={{backgroundColor:'#34495e'}}>
        <View id='header' style={stylesC.header}>
          <Text style={{color:'#2c3e50',padding:30,paddingTop:5,fontSize:30}}>
              Calendar   
          </Text>
          
        </View>

        <View style={{flexDirection:'row',height:'83.5%'}} >

          <View style={stylesC.menu}>
            <TouchableWithoutFeedback 
            onPress={()=>
                      {
                        this.props.navigation.navigate('DrawerToggle');
                        //console.log('Clicked!');
                      }
                  }
            >
              <View style={{}}>
                <Icon
                  style={{paddingRight:0,paddingTop:270}}
                  name='dots-two-vertical'
                  size={17}
                  color='#FFEA00'
                />
              </View>
            </TouchableWithoutFeedback>
          </View>

          <View style={stylesC.container}>

            <View style={stylesC.calendar}>

            </View>
          
          </View>

        </View>
        <View id='footer' style={stylesC.footer}>
          
        </View>
      </View>
    );
  }
}

const stylesC = StyleSheet.create({
  container: {
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
    width:'97%'
  },
  header:{
    height:'8%',
    width:'100%',
    backgroundColor: '#00B0FF',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  footer:{
    height:'8.5%',
    width:'100%',
    backgroundColor: '#2c3e50',    
  },
  TextHighlight:{
    fontSize:22,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#D2691E',
    // textShadowColor:'gray',
    // textShadowOffset:{height:1,width:1}
  },
  TextLowlight:{
    fontSize:19,
    fontWeight:'500',
    fontStyle:'italic',
    color:'#CD853F',
    // textShadowColor:'gray',
    // textShadowOffset:{height:1,width:1}
  },
  menu:{
    width:'3%',
    height:'100%',
    //backgroundColor:'#84FFFF'
    backgroundColor:'#009688',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
  },
  calendar:{
    width:'80%',
    height:'60%',
    borderWidth:2,
    // borderLeftWidth:5,
    // borderRightWidth:5,
    // borderTopWidth:5,
    // borderBottomWidth:5,
    borderColor:'#CD853F',
    // borderRightColor:'#CD853F',
    borderBottomRightRadius:22,
    borderBottomLeftRadius:22,
    borderTopRightRadius:22
    
  }
});
AppRegistry.registerComponent('Calendar',() => Calendar)