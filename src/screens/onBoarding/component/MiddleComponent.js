import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { mScale } from "../../constants/Utils";

const { height, width } = Dimensions.get("window");
class MiddleComponent extends Component {
  render() {
    const { headerTitle, image, footerTitle, imageStyle } = this.props;
    return (
      <View>
        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(40),
            textAlign: "center",
            alignSelf: "center",
            marginTop: mScale(68),
            marginHorizontal: mScale(20)
          }}
        >
          {headerTitle}
        </Text>
        <Image
          resizeMode="contain"
          source={image}
          style={[
            {
              marginTop: mScale(50),
              width,
              height: height * 0.32,
              alignSelf: "center"
            },
            imageStyle
          ]}
        />
        <Text
          style={{
            fontFamily: "CircularStd-Black",
            fontSize: mScale(15),
            textAlign: "center",
            alignSelf: "center",
            marginTop: mScale(25)
          }}
        >
          {footerTitle}
        </Text>
      </View>
    );
  }
}
export default MiddleComponent;
