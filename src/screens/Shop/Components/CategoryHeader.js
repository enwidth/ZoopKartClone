import React, { Component } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { mScale } from "../../../constants/Utils";

import images from "../../../constants/Images";
const { width } = Dimensions.get("window");
class CategoryHeader extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          width,
          height: mScale(65),
          justifyContent: "space-between",

          alignItems: "center",
          borderBottomWidth: mScale(4),
          borderBottomColor: "#c4c4c4"
        }}
      >
        <View style={{ flexDirection: "row", marginLeft: mScale(20) }}>
          <TouchableOpacity onPress={onPress}>
            <Image
              source={images.BackArrow}
              style={{
                height: mScale(20),
                width: mScale(20)
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: mScale(20),
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(18),
              color: "#000"
            }}
          >
            {title}
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginRight: mScale(20) }}>
          <TouchableOpacity>
            <Image
              source={images.Filter}
              style={{
                height: mScale(30),
                width: mScale(30)
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={images.Sort}
              style={{
                height: mScale(30),
                width: mScale(30),
                marginLeft: mScale(15)
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default CategoryHeader;
