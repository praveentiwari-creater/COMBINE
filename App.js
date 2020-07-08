import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Slider_Image from './Component/Slider_Image';
import Slider_Image2 from './Component/Slider_Image2';
import Slider_Image3 from './Component/Slider_Image3';
import Slider_Image_Complete from './Component/Slider_Image_Complete';
import Single_Radio_Button_Library from './Component/Single_Radio_Button_Library';
import multi_Select_Radio from './Component/multi_Select_Radio';
import CheckBox from './Component/CheckBox';
import Single_Radio_Button from './Component/Single_Radio_Button';
import Testing from './Component/Testing';
import Slider_Image4 from './Component/Slider_Image4';
import Cart_Design from './Component/Cart_Design';
import Design from './Component/Design';
import Grid_FlatList from './Component/Grid_FlatList';
import Password_Eye from './Component/Password_Eye';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Design" component={Design} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Password_Eye" component={Password_Eye} />
      <Drawer.Screen name="Grid_FlatList" component={Grid_FlatList} />
      <Drawer.Screen name="Cart_Design" component={Cart_Design} />
      <Drawer.Screen name="Slider_Image3" component={Slider_Image3} />
      <Drawer.Screen name="Slider_Image4" component={Slider_Image4} />
      <Drawer.Screen name="Slider_Image2" component={Slider_Image2} />
      <Drawer.Screen name="Slider_Image" component={Slider_Image} />
      <Drawer.Screen name="Slider_Image_Complete" component={Slider_Image_Complete} />
      <Drawer.Screen name="Testing" component={Testing} />
      <Drawer.Screen name="Single_Radio_Button" component={Single_Radio_Button} />
      <Drawer.Screen name="multi_Select_Radio" component={multi_Select_Radio} />
      <Drawer.Screen name="CheckBox" component={CheckBox} />
      <Drawer.Screen name="Single_Radio_Button_Library" component={Single_Radio_Button_Library} />
    </Drawer.Navigator>
  )
}

