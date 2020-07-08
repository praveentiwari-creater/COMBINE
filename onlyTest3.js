import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions,Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
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
    // {name:4,img:"https://source.unsplash.com/1024x768/?tree"}, // Network image
]



export default class Slider_Image3 extends React.Component {
// /* <Image source={{uri:"https://source.unsplash.com/1024x768/?girl"}} style={{width:200,height:100}}/> 
        constructor(props) {
        super(props);
        this.state = {
            activeSlide: null
        }
    }

    _renderItem = ({ item }) => {

        return (
            <View style={styles.slide} >
                <Image source={item.img} style={{ width: '100%', height: 100, borderRadius: 4 }} />
            </View>
        );
    }

    render() {
        const { activeSlide } = this.state;
        return (
            <View style={{ flex: 1 }}>
                
                <View style={{ backgroundColor: 'white', marginTop: 100 }}>
                <View>
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
                    {/* {this.pagination} */}
                    <Animated.View style={{bottom:50}}>
                    <Pagination
                        dotsLength={DATA.length}
                        activeDotIndex={activeSlide}
                        // containerStyle={{ backgroundColor: 'white' }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 0.2,
                            backgroundColor: 'red',
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />
                     </Animated.View>
                    <Text>name</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    slide: {
        width: "100%",
        height: 100,
    },
})