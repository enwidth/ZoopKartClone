import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { mScale } from "../../../constants/Utils";
import { ifIphoneX } from "react-native-iphone-x-helper";
import images from "../../../constants/Images";

class Header extends Component {
  render() {
    return (
      <View
        style={{
          ...ifIphoneX({ marginTop: mScale(50) }, { marginTop: mScale(20) }),
          marginBottom: mScale(20),
          flexDirection: "row"
        }}
      >
        <TouchableOpacity>
          <Image source={images.menu} style={{ marginLeft: mScale(20) }} />
        </TouchableOpacity>
        <Image
          source={images.ZoopKartTextLogo}
          style={{ marginLeft: mScale(100) }}
        />
        <TouchableOpacity>
          <Image source={images.Search} style={{ marginLeft: mScale(90) }} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Header;
