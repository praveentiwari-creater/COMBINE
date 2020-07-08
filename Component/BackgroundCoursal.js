import * as React from 'react';
import {StyleSheet,View,Dimensions,Image,ScrollView,Text} from 'react-native';

const DEVICE_WIDTH= Dimensions.get('window').width;

 class BackgroundCoursal extends React.Component{
    scrollRef=React.createRef();
    constructor(props){
        super(props);
        this.state={
            selectedIndex:0
        }
    }

    componentDidMount=()=>{
      setInterval(() => {
          this.setState(prev=>({selectedIndex: prev.selectedIndex === this.props.images.length -1 ? 0 : prev.selectedIndex + 1}),
          () => {
          this.scrollRef.current.scrollTo({
              animated:true,
              y:0,
              x: 400 * this.state.selectedIndex,
            // x: DEVICE_WIDTH * this.state.selectedIndex,
          });
          }
          );
      }, 3000);
    };

    setSelectedIndex=event=>{
        //width of the view size
        const viewSize=event.nativeEvent.layoutMeasurement.width;
        //get current position of scrollView
        const contentOffset=event.nativeEvent.contentOffset.x;

        const selectedIndex=Math.floor(contentOffset/viewSize);
        this.setState({selectedIndex})
    }

    render(){
        const {images}=this.props;
        const {selectedIndex}=this.state;
        return(
            <View   style={{width:'100%',height:'30%',marginTop:200}}>
                <ScrollView 
                horizontal 
                pagingEnabled 
                onMomentumScrollEnd={this.setSelectedIndex}
                ref={this.scrollRef}
                
                >
                    {images.map(image=>(
                        <Image key={image}
                        source={{uri:image}}
                        style={styles.backgroundImage}
                        />
                    ))}
                    
                </ScrollView>
   
   <View style={styles.circleDiv}>
       {images.map((image,i)=>(
           <View
           key={image}
           style={[styles.whiteCircle,{opacity:i === selectedIndex ? 0.5 : 1}]}
           />
       ))}
   </View>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    backgroundImage:{
      
        height:"100%",
        width:387,
        margin:6,
        // marginLeft:15
    },
    circleDiv:{
        position:'absolute',
        bottom:2,
        height:10,
        width:'100%',
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    whiteCircle:{
        width:10,
        height:10,
        borderRadius:5,
        margin:5,
        backgroundColor:'#fff'
    }
})
export {BackgroundCoursal};