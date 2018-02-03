import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity,
TouchableWithoutFeedback, ToastAndroid, PermissionsAndroid  } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';
// import Voice from 'react-native-voice';
// import SpeechAndroid from 'react-native-android-voice';


export default class Home extends React.Component {

  openModal()
  {
    this.props.navigation.navigate('Command');
    console.log('Hey I am here');
  }

  componentDidMount()
  {
    this.search1.blur();
    console.log('Here');
    // ToastAndroid.show('YO 1st Toast! , ...Welcome...',ToastAndroid.SHORT);
  }

  // async _recordCommand(){
  //   //try
            //<TouchableOpacity activeOpacity={0.6} 
            //         style={styles.voiceBut}
            //         onPress={() => this._recordCommand()}
            // >
            //   <Icon1
            //     name='record-voice-over'
            //     size={42}
            //     color='white'
            //     // style={{}}
            //   />
            // </TouchableOpacity>
  //   {

  //     const granted = await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.CAMERA,
  //     {
  //       'title': 'Cool Photo App Camera Permission',
  //       'message': 'Cool Photo App needs access to your camera ' +
  //                  'so you can take awesome pictures.'
  //     }
  //   )
  //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //     console.log("You can use the camera")
  //   } else {
  //     console.log("Camera permission denied")
  //   }
  //     Voice.start('en');

  //     // var spokenText=''; 
  //     // spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.ENGLISH_INDIA);
  //     // ToastAndroid.show(spokenText, ToastAndroid.LONG);
  //   }
  //   // catch(error)
  //   // {
  //   //   ToastAndroid.show('1', ToastAndroid.LONG);
  //   //   switch(error)
  //   //   {
  //   //     case SpeechAndroid.E_VOICE_CANCELLED:
  //   //       ToastAndroid.show('Voice Recognizer Cancelled', ToastAndroid.LONG);
  //   //       break;
  //   //     case SpeechAndroid.E_NO_MATCH:
  //   //       ToastAndroid.show('Voice NO MATCH', ToastAndroid.LONG);
  //   //       break;
  //   //     case SpeechAndroid.E_SERVER_ERROR:
  //   //       ToastAndroid.show('Voice SERVER ERROR', ToastAndroid.LONG);
  //   //       break;
  //   //     case SpeechAndroid.E_ACTIVITY_DOES_NOT_EXISTS:
  //   //       ToastAndroid.show('ACTIVITY_DOES_NOT_EXISTS', ToastAndroid.LONG);
  //   //       break;
  //   //   }
  //   // }
  // }

  // async buttonClick()
  // {
  //   try{
  //       //More Locales will be available upon release.
  //       var spokenText = await SpeechAndroid.startSpeech("Speak yo", SpeechAndroid.GERMAN);
  //       ToastAndroid.show(spokenText , ToastAndroid.LONG);
  //   }catch(error){

  //       ToastAndroid.show(JSON.stringify(error) , ToastAndroid.LONG);
  //       console.log(JSON.stringify(error));
  //       // switch(error){
  //       //     case SpeechAndroid.E_VOICE_CANCELLED:
  //       //         ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
  //       //         break;
  //       //     case SpeechAndroid.E_NO_MATCH:
  //       //         ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
  //       //         break;
  //       //     case SpeechAndroid.E_SERVER_ERROR:
  //       //         ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
  //       //         break;
  //       //     /*And more errors that will be documented on Docs upon release*/
  //       // }
  //   }
  // }

  render() {
    return (
      <View >
        <View id='header' style={styles.header}>
          <Text style={{color:'#2c3e50',padding:30,paddingTop:5,fontSize:30}}>
              Hello   
          </Text>
          <Icon
            style={{paddingTop:7}}
            name='emoji-happy'
            size={35}
            color='#2c3e50'
          />
        </View>

        <View style={{flexDirection:'row',height:'83.5%'}} >

          <View style={styles.menu}>
            <TouchableWithoutFeedback 
            onPress={()=>{
              this.props.navigation.navigate('DrawerToggle');
              console.log('Clicked!');  

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

          <View style={styles.container}>

          <TouchableOpacity style={{padding:12,marginTop:120}}>
              <Text style={styles.TextLowlight}>
                "Any Assignments for today?."   
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.floating}>
              <Text style={styles.TextHighlight}>
                "Show me my Schedule for Monday."   
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding:12,marginBottom:50}}>
              <Text style={styles.TextLowlight}>
                "Open Up The TimeTable."   
              </Text>
            </TouchableOpacity>

            

          </View>

        </View>
        <View id='footer' style={styles.footer}>
          <SearchBar
            lightTheme
            round
            noIcon
            clearIcon={{color:'red'}}
            placeholder='  On Your Command ,Captain ...'
            placeholderTextColor='#CD853F'
            inputStyle={{backgroundColor:'white',color:'#D2691E'}}
            containerStyle={{backgroundColor:'#00B0FF'}}
            onFocus={() => this.openModal()}
            ref={search1 => this.search1 = search1}
            //editable={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    backgroundColor: '#00B0FF',    
  },
  TextHighlight:{
    fontSize:22,
    fontWeight:'bold',
    fontStyle:'italic',
    color:'#D2691E',
    // textShadowColor:'gray',
    // textShadowOffset:{height:1,width:1}
  },
  floating:{
    padding:12,    
   // backgroundColor: '#E8F5E9',
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
  voiceBut:{
    height:60,
    width:70,
    borderRadius:100,
    backgroundColor:'#1A237E',
    //marginTop:100,
    //flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    elevation:20
  }
});

AppRegistry.registerComponent('Home',() => Home)