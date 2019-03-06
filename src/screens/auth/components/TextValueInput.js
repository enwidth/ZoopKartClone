import React, { Component } from "react";
import { View, Dimensions, Image, TextInput } from "react-native";
const { width } = Dimensions.get("window");
import { mScale } from "../../../constants/Utils";
class TextValueInput extends Component {
  render() {
    const { placeholder, secureTextEntry, image } = this.props;
    return (
      <View
        style={{
          width,
          backgroundColor: "#fff",
          alignItems: "center",
          flexDirection: "row"
        }}
      >
        <TextInput
          secureTextEntry={secureTextEntry}
          style={{
            height: mScale(55),
            width: width - mScale(46),
            borderWidth: 2,
            borderColor: "#40F7A5",
            alignSelf: "center",
            marginBottom: mScale(26),
            paddingLeft: mScale(15),
            marginLeft: mScale(25)
          }}
          placeholder={placeholder}
        />
        <Image
          source={image}
          style={{
            position: "absolute",
            right: mScale(40),
            bottom: mScale(40)
          }}
        />
      </View>
    );
  }
}
export default TextValueInput;
