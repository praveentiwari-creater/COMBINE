import React from 'react';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, View, Text, Image, Button, Animated, Platform } from 'react-native';
// import { SafeAreaView } from 'react-navigation';
const { width: screenWidth } = Dimensions.get('window')

// const IS_IOS = Platform.OS === 'ios';
const IS_IOS = Platform.OS === 'android';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(73);
const itemHorizontalMargin = wp(3);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 3;

export default class Slider_Image4 extends React.Component {
    static navigationOptions = {
        title: 'CarouselScr',
    };
    constructor(props) {
        super(props);
        this.state = {
            posts: [

                {name: 'image1', image: require('../IMAGE/image2.jpg') },
                { name: 'image2', image: require('../IMAGE/image3.jpg') },
                { name: 'image3', image: require('../IMAGE/image4.jpg') },
                { name: 'image4', image: require('../IMAGE/photo.jpg') },
                { name: 'image5', image: require('../IMAGE/car1.jpg') },
                { name: 'image6', image: require('../IMAGE/car2.jpg') },
                { name: 'image7', image: require('../IMAGE/car3.jpg') },
                { name: 'image8', image: require('../IMAGE/car4.jpg') },
            ],
            size: { screenWidth },
            activeSlide: '',
            //  curY: new Animated.Value(0),
        };
    }


    get pagination() {
        const { posts, activeSlide } = this.state;
        return (
<Pagination
                dotsLength={posts.length}
                activeDotIndex={activeSlide}
                // containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)',
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.3}
                inactiveDotScale={0.9}
            />
        );
    }
    renderItemm({ item, index }, parallaxProps) {
        console.log("Image===>", item);
        return (
 // <View style={styles.slide}>
            //     <View style={styles.slideInnerContainer} >
           
            //     </View>
            // </View>

            <Image style={styles.image} source={item.image} />
            // <View style={styles.item}>
            //     <ParallaxImage
            //         source={ item.image }
            //         containerStyle={styles.imageContainer}
            //         style={styles.image}
            //         parallaxFactor={0.35}
            //         showSpinner={true}
            //         {...parallaxProps}
            //     />
            //     {/* <Image style={styles.image} source={item.image} />
            //     <Text style={styles.title}>
            //         {/ {item.name} /}
            //     {/ </Text> /}
            // </View>
            );
        }
        render() {
            const { navigate } = this.props.navigation;
            return (
                <View>
                    <View>
                        <View >
                            <Carousel
                                //  width={375}
                                //  height={300}
                                // zoomScale={0.2}
                                // containerCustomStyle={{flexGrow : 0 }}
                                // style={{height : 50,width : 50}}
                                // sliderWidth={screenWidth}
                                // sliderHeight={screenWidth - 190}
                                // itemWidth={screenWidth - 80}
                                // itemHeight={screenWidth - 190}
                                // contentContainerStyle={{height :screenWidth }}  
                                sliderWidth={sliderWidth}
                            //    layoutCardOffset={0}
                            //    sliderHeight={screenWidth}
                               itemHeight={screenWidth}
                               itemWidth={itemWidth}   
                               data={this.state.posts}
                               renderItem={this.renderItemm}
                               loop={true}
                            //    activeSlideAlignment={'center'}
                            //    hasParallaxImages={true}
                                onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                removeClippedSubviews={false}
                        //         callbackOffsetMargin={6}
                        //       inactiveSlideScale={0.9}
   
                        //     inactiveSlideShift={0.9}
                        //    layout = {'default'}
                           />
                         
                    </View>
                    <Animated.View
                        style={{
                            bottom: 50,
                        }}>
                        {this.pagination}
                    </Animated.View>
                    <View>
                        <Button title='Back' onPress={() => navigate('home')} style={{backgroundColor:'red'}} />
                    </View>

                </View>

            </View>

        );
    }
}
const styles = StyleSheet.create({
    item: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({  android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
        // ios: 0,
    },
    image: {
        // ...StyleSheet.absoluteFillObject,
        // resizeMode: 'cover',
        width: sliderWidth - 80,
        height: sliderWidth - 230,
    },
    slide: {
        width: itemWidth,
        height: itemWidth,
       // paddingHorizontal: horizontalMargin
        // other styles for the item container
    },
    slideInnerContainer: {
        width: slideWidth,
        flex: 1,

        // other styles for the inner container
    }
})