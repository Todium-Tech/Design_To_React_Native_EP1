import React from "react"
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native"

const Dev_Height = Dimensions.get('window').height
const Dev_Width = Dimensions.get('window').width

import {Ionicons ,Octicons,SimpleLineIcons} from "@expo/vector-icons"
import SelectInput from 'react-native-select-input-ios'

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      items:[
        {
          name:"<$220,000"
        },
        {
          name:"For sale"
        },
        {
          name:"3-4 beds"
        }
      ],

      items2:[
        {
          rate:"$200.000",
          address:"Jenison,MI 49428, SF",
          specs:"4 bedrooms / 2 bathroom / 1416 ft2",
          uri:"https://www.edisongroup.com/wp-content/uploads/2018/07/architecture-1836070-300x200.jpg"
        },
        {
        rate:"$140.000",
        address:"351 Rockwood Dr, SF",
        specs:"4 bedrooms / 2 bathroom / 1416 ft2",
        uri:"https://mcdn.wallpapersafari.com/medium/3/9/JceZGK.jpg"
        }
      ]
    }
  }

  _renderItem = ({ item, index }) => {
    return(
    <View style={{width:"80%",height:"70%"}}>
        <TouchableOpacity style={styles.list_1}>
          <Text> {item.name} </Text>
        </TouchableOpacity>
    </View>
    )
  }

  _renderItem2 = ({ item , index }) => {
    return(
      <View>
        <View style={{height:170,marginTop:"4%"}}>
          <ImageBackground source={{
            uri:item.uri}} 
            imageStyle={{borderRadius:25}} style={{height:"100%",width:"95%",marginLeft:"5%"}}>
            <TouchableOpacity style={styles.icon_list}>
              <SimpleLineIcons name="heart" size={23} />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <View>
          <View style={{flexDirection:"row"}}>
            <Text style={{marginTop:"4%",fontSize:27,marginLeft:"7%",fontWeight:"700",color:"#3b444b"}}> {item.rate} </Text>
            <Text style={{marginTop:"5.5%",color:"#808080"}}>  {item.address} </Text>
          </View>

          <View>
            <Text style={{marginTop:"2%",marginLeft:"10%"}}>{item.specs}</Text>
          </View>
        </View>

      </View>
      
    )
  }

  render(){
    return(
      <SafeAreaView style={{height:Dev_Height,width:Dev_Width}}>

        <View style={{flexDirection:"row",height:"10%",alignItems:"center"}}>
          <TouchableOpacity 
             style={styles.icon_1}>
            <Ionicons name="ios-menu" size={20} color="#161F3D" style={{marginTop:"30%"}}/>
          </TouchableOpacity>

          <TouchableOpacity 
             style={styles.icon_2}>
            <Ionicons name="ios-search" size={20} color="#161F3D" style={{marginTop:"30%"}}/>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop:"7%",marginLeft:"5%",color:"#808080"}}> City </Text>

        <View style={{height:"10%",width:"80%",marginTop:"2%",flexDirection:"row"}}>
           <SelectInput value={0} 
              style={{height:"100%",width:"93%",
              marginLeft:24,
              justifyContent:"center",
              borderBottomColor:"#f1f1f1",borderBottomWidth:3}}
              labelStyle={{fontSize:27}}
              options={
                [{value: 0, label: 'San Fransisco'}]
              }
               />

            <Octicons name="settings" size={23} color="#161F3D" style={{marginTop:"5%"}} />
        </View>

        <View>

           <FlatList
            data={this.state.items}
            renderItem={this._renderItem} 
            horizontal={true}
            style={{marginLeft:"7%",height:"8%",width:"100%",marginTop:"5%"}}
            
            />

        </View>

        <View style={{height:"65%",width:"100%",marginTop:"2%"}}>
          <FlatList
            data={this.state.items2}
            renderItem={this._renderItem2}
            style={{height:"100%",width:"100%"}}
            />
        </View>

        <TouchableOpacity  style={styles.TouchableOpacityStyle} >
          <Text style={{color:"#FFF",fontSize:15}}> <SimpleLineIcons name="compass" size={15}  /> Map View </Text>
        </TouchableOpacity>

      </SafeAreaView>
    )
  }
}

const styles= StyleSheet.create({
  list_1:{
     height:"100%",
     width:"100%",
     backgroundColor:"#f2f2f2",
     alignItems:"center",
     justifyContent:"center",
     borderRadius:45
     },
  icon_1:{
    height:"75%",
    width:"13%",
    marginLeft:"4%",
    marginTop:"7%",
    alignItems:"center",
    borderRadius:15,
    borderWidth:2,
    borderColor:"#f1f1f1",
  },
  icon_2:{
    height:"75%",
    width:"13%",
    marginLeft:"60%",
    marginTop:"7%",
    alignItems:"center",
    borderRadius:15,
    borderWidth:2,
    borderColor:"#f1f1f1",
  },
  icon_list:{
    backgroundColor:"#FFF",
    height:"25%",
    width:"12%",
    borderRadius:15,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:"78%",
    marginTop:"4%"
  },
  TouchableOpacityStyle:{
 
    position: 'absolute',
    width: "35%",
    height: "9%",
    alignItems: 'center',
    justifyContent: 'center',
    right: 110,
    bottom: 30,
    backgroundColor:"#161F3D",
    borderRadius:45,
  },

  
})