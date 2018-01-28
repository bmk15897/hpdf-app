import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image,
         TouchableHighlight, TouchableOpacity, ScrollView,
         Picker, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


export default class Menu extends React.Component {
	
	constructor()
	{
		super();
		this.state={
			// UserName:'User_Name',
			// UserNameLink:'@User_Name_Link',
			//UserPicLink:require('./Images/profile-picture-none.png'),

			Following:690,
			Followers:653,
			MenuImgLink:require('./Images/calendar.gif'),
			data1:[
				{
					Title:'Home',
					Icon:'home'
				},
				{
					Title:'Calendar',
					Icon:'calendar'
				},
				{
					Title:'Assignments',
					Icon:'book'
				},
				{
					Title:'Timetable',
					Icon:'layout'
				}
			],
			data2:[
				{
					Title:'Settings and Privacy'
				},
				{
					Title:'Help Center'
				}
			]
		}
	}

	render()
	{
		return(
			<View  style={{flexDirection:'column',height:'100%',backgroundColor:'#1abc9c'}}>
				
				<Image
					source={this.state.MenuImgLink}
					style={stylesM.TopMenuImg}
				/>

				<ScrollView>
			   		
			   		<FlatList
			   			style={{borderTopWidth:0.5,borderTopColor:'lightgrey'}}
			   			data={this.state.data1}
			   			renderItem={( {item} ) => {
			   				return(
				   				<TouchableOpacity activeOpacity={0.53} style={stylesM.SideMenuItem} 
				   					onPress={() => this.props.navigation.navigate(item.Title)} >
				   					<View style={{width:35,flexDirection:'row',justifyContent:'center'}} >
					   					<Icon 
					   						name={item.Icon}
					   						size={30}
					   						color='#1A237E'
					   					/>
				   					</View>
				   					<Text style={stylesM.ListText} > {item.Title} </Text>
				   					
				   				</TouchableOpacity>
			   				);
			   			}}
			   			keyExtractor={item => item.Title}
			   		/>

			  	</ScrollView>
		  	</View>
		);	
	}
}

const stylesM = StyleSheet.create({
	container:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	TopMenuImg:{
	    height:200,
	    width:'100%',
	    //marginLeft:20,
	    //marginBottom:0,
	    // marginTop:30
  	},
  	MenuTitle:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingBottom:10
  	},
  	MenuFooter:{
  		marginTop:50,
  		width:'100%',
  		height:40,
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		borderTopWidth:0.5,
  		borderTopColor:'gray'
  		//backgroundColor:'red'
  	},
  	SideMenuItem:{
  		flexDirection:'row',
  		justifyContent:'flex-start',
  		alignItems:'center',
  		paddingLeft:30,
  		padding:15,

  	},
  	ListText:{
  		fontSize:20,
  		fontWeight:'400',
  		paddingLeft:20,
  		color:'#1A237E'
  	}

});

AppRegistry.registerComponent('Menu',() => Menu);