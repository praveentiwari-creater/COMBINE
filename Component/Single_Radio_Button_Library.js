import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

var radio_props = [
    { label: 'param1', value: 0 },
    { label: 'param2', value: 1 },
    { label: 'param3', value: 2 },
    { label: 'param4', value: 3 }
];
export default class Single_Radio_Button_Library extends Component {
    state = {
        value: 0
    }
    render() {
        console.log('radio', this.state.value)
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
                {/* <RadioForm
              radio_props={radio_props}
              initial={0}
              onPress={(value) => {this.setState({value:value})}}
            /> */}
                <RadioForm
                    // radio_props={radio_props}
                    // initial={0}
                    formHorizontal={false}
                    // labelHorizontal={true}
                    // buttonColor={'red'}
                    animation={true}
                    // onPress={(value) => { this.setState({ value: value }) }}
                >

{
    radio_props.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
        {/*  You can set RadioButtonLabel before RadioButtonInput */}
        <RadioButtonInput
          obj={obj}
          index={i}
          isSelected={this.state.value === i}
          onPress={(value) => { this.setState({ value: value }) }}
          borderWidth={1}
          buttonInnerColor={'red'}
          buttonOuterColor={this.state.value === i ? '#2196f3' : '#000'}
          buttonSize={30}
          buttonOuterSize={40}
          buttonStyle={{}}
          buttonWrapStyle={{marginLeft: 10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
          onPress={(value) => { this.setState({ value: value }) }}
          labelStyle={{fontSize: 22, color: 'blue',height:100,marginTop:20}}
          labelWrapStyle={{width:200,height:100}}
        />
      </RadioButton>
    ))
  }  

                    </RadioForm>
            </View>
        )
    }
}
