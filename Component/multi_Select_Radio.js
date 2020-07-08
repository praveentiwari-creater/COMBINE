import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,StyleSheet} from 'react-native'

export default class multi_Select_Radio extends Component {
  constructor(props){
    super(props);
    this.state={
      bln1:false,
      bln2:false,
      bln3:false,
      bln4:false,
      text1:'',
      text2:'',
      text3:'',
      text4:''

    }
  }
    render() {
      console.log(this.state.text1+" "+this.state.text2+" "+this.state.text3+" "+this.state.text4);
      // console.log(this.state.text2);
      // console.log(this.state.text3);
      // console.log(this.state.text4);
        return (
            <View style={{flex:1}}>
              <View style={{marginLeft:100,marginTop:20,flexDirection:'row'}}>
                <TouchableOpacity style={styles.overView}>
                {this.state.bln1==true ? 
                <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'blue'}]} 
                 onPress={()=>this.setState({bln1:false,text1:''})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    :
                    <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'white'}]}
                 onPress={()=>this.setState({bln1:true,text1:'Apple'})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    } 
                </TouchableOpacity>
                <Text style={{fontSize:25,color:'black'}}> Apple </Text>
              </View>


              <View style={{marginLeft:100,marginTop:20,flexDirection:'row'}}>
              <TouchableOpacity style={styles.overView}>
              {this.state.bln2==true ? 
                <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'blue'}]} 
                 onPress={()=>this.setState({bln2:false,text2:''})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    :
                    <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'white'}]} 
                onPress={()=>this.setState({bln2:true,text2:'Mango'})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    } 
                     </TouchableOpacity>
                <Text style={{fontSize:25,color:'black'}}> Mango </Text>
              </View>

              <View style={{marginLeft:100,marginTop:20,flexDirection:'row'}}>
                <TouchableOpacity style={styles.overView}>
                {this.state.bln3==true ? 
                <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'blue'}]}
                  onPress={()=>this.setState({bln3:false,text3:''})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    :
                    <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'white'}]}
                 onPress={()=>this.setState({bln3:true,text3:'Orange'})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    } 
                </TouchableOpacity>
                <Text style={{fontSize:25,color:'black'}}> Orange </Text>
              </View>


              <View style={{marginLeft:100,marginTop:20,flexDirection:'row'}}>
                <TouchableOpacity style={styles.overView} >
                {this.state.bln4==true ? 
                <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'blue'}]} 
                 onPress={()=>this.setState({bln4:false,text4:''})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    :
                    <View style={{alignItems:'center',justifyContent:'center'}}>
               
                <TouchableOpacity style={[styles.innerView,{backgroundColor:'white'}]}
                 onPress={()=>this.setState({bln4:true,text4:'Banana'})} >
                  
                   </TouchableOpacity>
                
                    </View>
                    } 
                </TouchableOpacity>
                <Text style={{fontSize:25,color:'black'}}> Banana </Text>
              </View>
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
  overView:{
    width:40,height:40,borderRadius:20,borderWidth:2,borderColor:'red'
  },
  innerView:{
    width:30,height:30,borderRadius:15,borderWidth:2,marginTop:3,borderColor:'white'
   
  }
})


