import React from 'react';
import { View, Text,Dimensions } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
// import FastImage from 'react-native-fast-image'
const WIDTH=Dimensions.get('window').width;
export default class Slider_Image extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                // require('../IMAGE/photo.jpg'),          // Local image
                // require('../IMAGE/notification.png'), 
                // require('../IMAGE/search.png'), 
            ],
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ marginTop: 140,width:'auto' }} >
                    <SliderBox
                        // ImageComponent={FastImage}
                        // resizeMethod={'resize'}
                        // resizeMode={'cover'}
                        images={this.state.images}
                        autoplay={true}
                        circleLoop={true}
                        sliderBoxHeight={100}
                       
                        paginationBoxVerticalPadding={10}
                        dotColor="#FFEE58"
                        inactiveDotColor="blue"
                        ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 5 }}
                        imageLoadingColor="grey"

                        onCurrentImagePressed={index =>
                            console.warn(`image ${index} pressed`)
                        }
                    //   currentImageEmitter={index => console.warn(`current pos is: ${index}`)} 
                    />
                    <Text style={{ fontSize: 30, marginTop: 50, color: 'blue' }}>
                        Slider Image
                </Text>
                </View>
            </View>
        )
    }
}