import React from 'react';
import { StyleSheet, Text, View ,AppRegistry ,TouchableWithoutFeedback,
        Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Comd extends React.Component {
  
  componentDidMount()
  {
    this.search1.focus();
    //console.log('hello');
  }

  backMenu()
  {
    Keyboard.dismiss();
    this.props.navigation.navigate('HomeM');
  }

  render() {
    return (
      <TouchableWithoutFeedback style={{height:'100%'}} onPress={() => this.backMenu()} >

        <View style={{height:'100%',backgroundColor:'#00B0FF'}}>
          <SearchBar
              lightTheme
              round
              noIcon
              ref={search1 => this.search1 = search1}
              clearIcon={{color:'red'}}
              placeholder='  On Your Command ,Captain ...'
              placeholderTextColor='#CD853F'
              inputStyle={{backgroundColor:'white',color:'#D2691E'}}
              containerStyle={{backgroundColor:'transparent',borderBottomWidth:0}}
              //selection={{start:10}}
              selectionColor='#81C784'
            />
        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

AppRegistry.registerComponent('Comd',() => Comd);