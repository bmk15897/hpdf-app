import React from 'react';
import { StyleSheet, Text, View ,AppRegistry ,TouchableWithoutFeedback,
        Keyboard, ToastAndroid, FlatList, TouchableOpacity, ScrollView  } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class Comd extends React.Component {
  constructor()
  {
    super();
    var temp=' { "Pair": { "entity": "action_for", "value": "assignment" } } ';
    this.state={
      textValue:'',
      response:[
                  {
                    Pair:
                    {
                      entity: '',
                      value: ''
                    }
                  },
                  

                ]
    }
  }

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

  async loadResults(){
    //ToastAndroid.show('Here',ToastAndroid.SHORT);

    console.log('1..2...3....'+this.state.textValue+'1');
    try
    { 
      let response = await fetch('https://app.depress64.hasura-app.io/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          'text':this.state.textValue,
        }),
      });
      if(response.status !== 200)
      {
          console.log('Wrong request');
          ToastAndroid.show('Invalid Command',ToastAndroid.SHORT);
          console.log(response.status);
          return;
      }
      else
      {
        //ToastAndroid.show(JSON.stringify(response),ToastAndroid.LONG);
        //console.log(this.state.textValue);

        console.log(response);

        var responseJson = await response.json();
        //var arr = await JSON.parse(response._bodyInit);
        //responseJson[0].Pair.entity
        console.log(responseJson);
        //ToastAndroid.show(JSON.stringify(responseJson),ToastAndroid.SHORT);
        this.setState({
          response:responseJson,
        })

      //  var xhr = new XMLHttpRequest();
      // xhr.open("POST","https://app.depress64.hasura-app.io/", true);
      // xhr.setRequestHeader('Content-Type', 'application/json');
      // xhr.send(JSON.stringify({
      //     "text": this.value
      // }));
      // xhr.onreadystatechange = function () {
      //   if (this.readyState != 4) {
      //      console.log('4   '+this.responseText);
      //     return;
      //   }

      //   if (this.status == 200) {
      //       var data = JSON.parse(this.responseText);
      //       //document.getElementById("response").innerHTML = JSON.stringify(data)
      //       console.log(data);
      //   }
        // end of state change: it can be after some time (async)
    //};
        return;
      }
    }
    catch(error)
    {
      console.error(error);
      ToastAndroid.show(error,ToastAndroid.SHORT);
      return;
    }
    
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
              onSubmitEditing={ (search1) => this.loadResults()}
              onChangeText={(text) => this.setState({textValue:text})}
            />

            <ScrollView>

              <FlatList
                style={{backgroundColor:'transparent',height:'20%',width:"100%",marginTop:50}}
                data={this.state.response}
                renderItem={ ( {item} ) => {
                  console.log(item);
                  return(
                      
                      <TouchableOpacity style={stylesCom.result}>
                        <View style={stylesCom.Center}>
                          <Text>{item.Pair.entity}</Text>
                        </View>
                        

                        <View style={stylesCom.Center}>
                           <Text>{item.Pair.value}</Text>
                        </View>
                      </TouchableOpacity>

                    );
                }}
                keyExtractor={ item => item.Pair.value}
              />

            </ScrollView>

        </View>

      </TouchableWithoutFeedback>
    );
  }
}

const stylesCom = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  result:{
    flexDirection:'row',
    //backgroundColor:'yellow',
    alignItems:'center',
    height:100,
    width:600
  },
  Center:{
    alignItems:'center',
    justifyContent:'center',
    height:100,
    width:200,
    padding:30
  }
});

AppRegistry.registerComponent('Comd',() => Comd);