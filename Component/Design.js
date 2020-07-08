import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

export default class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            show1:false
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <View style={[styles.view, { flexDirection: 'row' }]}>

                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                <Image source={require('../IMAGE/car1.jpg')} style={{
                                    width: 80, height: 100,
                                    marginTop: 20, marginBottom: 20, borderRadius: 10
                                }} />
                            </View>

                            <View style={{ width: '43%' }}>
                                <Text style={{ fontSize: 14, color: 'blue' }}> up to 70% off </Text>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Householder Needs </Text>
                                <Text style={{ fontSize: 14, }}> personal goods </Text>
                            </View>

                            <View style={{ width: '33%' }}>
                                {this.state.show == false ?
                                    <TouchableOpacity onPress={() => this.setState({ show: true ,show1:false})}>
                                        <Image source={require('../IMAGE/down.png')} style={{ width: 40,
                                             height: 40, marginLeft: 30 }} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ show: false })}>
                                        <Image source={require('../IMAGE/up.png')} style={{ width: 40, 
                                            height: 40, marginLeft: 30 }} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                        <View>
                            {this.state.show == false ? null :
                                <View style={styles.view1}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                      
                                            <Image source={require('../IMAGE/car1.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                          
                                            <Text>Car 1</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/car2.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 2</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/car3.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text>Car 3</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/car3.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 4</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/car2.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 5</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/car1.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 6</Text>
                                        </View>

                                    </View>
                                </View>
                            }

                        </View>
                    </View>



<View style={{alignItems:'center',justifyContent:'center'}}>
<View style={[styles.view, { flexDirection: 'row' }]}>

                            <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                <Image source={require('../IMAGE/image1.jpg')} style={{
                                    width: 80, height: 100,
                                    marginTop: 20, marginBottom: 20, borderRadius: 10
                                }} />
                            </View>

                            <View style={{ width: '43%' }}>
                                <Text style={{ fontSize: 14, color: 'blue' }}> up to 35% off </Text>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: 'bold' }}> Personal Care </Text>
                                <Text style={{ fontSize: 14, }}> personal goods </Text>
                            </View>

                            <View style={{ width: '33%' }}>
                                {this.state.show1 == false ?
                                    <TouchableOpacity onPress={() => this.setState({ show1: true,show:false })}>
                                        <Image source={require('../IMAGE/down.png')} style={{ width: 40, height: 40, marginLeft: 30 }} />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={() => this.setState({ show1: false })}>
                                        <Image source={require('../IMAGE/up.png')} style={{ width: 40, height: 40, marginLeft: 30 }} />
                                    </TouchableOpacity>
                                }
                            </View>
                        </View>

                        <View>
                            {this.state.show1 == false ? null :
                                <View style={styles.view1}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image1.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text>Car 1</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image2.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 2</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image3.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text>Car 3</Text>
                                        </View>

                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image4.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 4</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image1.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 5</Text>
                                        </View>

                                        <View style={{ width: '33%', alignItems: 'center', justifyContent: 'center', }}>
                                            <Image source={require('../IMAGE/image2.jpg')} style={{
                                                width: 80, height: 100,
                                                marginTop: 20, marginBottom: 10, borderRadius: 10
                                            }} />
                                            <Text style={{ textAlign: 'center' }}>Car 6</Text>
                                        </View>

                                    </View>
                                </View>
                            }

                        </View>

</View>

                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view: {

        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        marginTop: 20
    },
    view1: {

        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 6,

    }
})