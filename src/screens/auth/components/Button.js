// to be used in all the classes where button is required

import React, { Component } from "react";
import { View, Dimensions, TouchableOpacity, Text, Image } from "react-native";
const { width } = Dimensions.get("window");
import { mScale } from "../../../constants/Utils";
class Button extends Component {
  render() {
    const { onPress, title, style, textStyle, image, ImageStyle } = this.props;
    return (
      <View
        style={[
          {
            justifyContent: "center",
            alignItems: "center"
          }
        ]}
      >
        <TouchableOpacity
          style={[
            {
              width: width - mScale(50),
              marginHorizontal: mScale(50),
              height: mScale(44),
              backgroundColor: "red",
              alignItems: "center",
              flexDirection: "row"
            },
            style
          ]}
          onPress={onPress}
        >
          <Image source={image} style={[{ alignSelf: "center" }, ImageStyle]} />
          <Text style={[{ alignSelf: "center" }, textStyle]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Button;
