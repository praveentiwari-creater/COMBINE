import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions,Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


// const images= [
//     "https://source.unsplash.com/1024x768/?nature",
//      "https://source.unsplash.com/1024x768/?water",
//      "https://source.unsplash.com/1024x768/?girl",
//      "https://source.unsplash.com/1024x768/?tree" // Network image

//      // require('../IMAGE/photo.jpg'),          // Local image
//      // require('../IMAGE/notification.png'), 
//      // require('../IMAGE/search.png'), 
//  ]


const WIDTH = Dimensions.get('window').width;
const DATA = [
    { img: require('../IMAGE/image2.jpg') },
    { img: require('../IMAGE/image3.jpg') },
    { img: require('../IMAGE/image4.jpg') },
    { img: require('../IMAGE/photo.jpg') },
    { img: require('../IMAGE/car1.jpg') },
    { img: require('../IMAGE/car2.jpg') },
    { img: require('../IMAGE/car3.jpg') },
    { img: require('../IMAGE/car4.jpg') },
    // { name:1,img:"https://source.unsplash.com/1024x768/?nature"},
    // { name:2,img:"https://source.unsplash.com/1024x768/?water"},
    // {name:3,img:"https://source.unsplash.com/1024x768/?girl"},
    // {name:4,img:"https://source.unsplash.com/1024x768/?tree"}, // Network image
]



export default class Slider_Image3 extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         images: [{name:"praveen"},{name:"tiwari"},{name:'village'}
    //         //    { name:1,img:"https://source.unsplash.com/1024x768/?nature"},
    //         //    { name:2,img:"https://source.unsplash.com/1024x768/?water"},
    //         //     {name:3,img:"https://source.unsplash.com/1024x768/?girl"},
    //         //     {name:4,img:"https://source.unsplash.com/1024x768/?tree"}, // Network image

    //             // require('../IMAGE/photo.jpg'),          // Local image
    //             // require('../IMAGE/notification.png'), 
    //             // require('../IMAGE/search.png'), 
    //               /* <Image source={{uri:"https://source.unsplash.com/1024x768/?girl"}} style={{width:200,height:100}}/> 
    //            <Image source={{uri:"https://source.unsplash.com/1024x768/?tree"}} style={{width:300,height:100}}/> */
    //         ]
    //     } {/* <Text style={{fontSize:40}}>{item.img}</Text>  */}
    // }


    constructor(props) {
        super(props);
        this.state = {
            activeSlide: null
        }
    }

    get pagination() {
        const { activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={DATA.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'white' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal:0.2,
                    backgroundColor: 'white',
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }


    _renderItem = ({ item }) => {
        return (
            <View style={styles.slide} >
                <Image source={item.img} style={{ width: '100%', height: 100, borderRadius: 4 }}/>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: 'white',marginTop:100 }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={DATA}
                        renderItem={this._renderItem}
                        sliderWidth={WIDTH}
                        itemWidth={WIDTH / 1.08}
                        layout={'default'}
                        autoplay
                        loop
                        inactiveSlideScale={0.97}
                        inactiveSlideOpacity={2}
                        activeSlideAlignment={'center'}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />
                </View>
                <Animated.View style={{ bottom: 45}}>
                        {this.pagination}
                    </Animated.View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: "100%",
        height: 100,
        // marginTop: 100
    },
    title: {
        width: 50,
        height: 50,

    }
})