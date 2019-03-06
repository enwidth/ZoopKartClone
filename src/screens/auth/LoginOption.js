import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import images from "../../constants/Images";
import { SHADOW } from "../../constants/Style";
import { mScale } from "../../constants/Utils";
import Button from "./components/Button";
const { height, width } = Dimensions.get("window");

class LoginOption extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          height,
          width,
          backgroundColor: "#fff"
        }}
      >
        <Image
          source={images.ZoopKart}
          resizeMode="stretch"
          style={{
            marginBottom: mScale(64),
            height: height * 0.25,
            width: width - mScale(90),
            marginHorizontal: mScale(45),
            marginTop: mScale(50)
          }}
        />

        {/* rendering three buttons for three options of input 
        and passing the background color , text and logo as props*/}

        <Button
          title={"CONTINUE WITH FACEBOOK"}
          style={{ ...SHADOW, backgroundColor: "#4A90E2" }}
          textStyle={{
            fontFamily: "CircularStd-Medium",
            color: "#fff",
            marginLeft: mScale(30)
          }}
          image={images.FB}
          ImageStyle={{ marginLeft: mScale(18) }}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />

        <Image
          source={images.BelowFB}
          style={{
            height: mScale(5),
            width: mScale(40),
            alignSelf: "center",
            marginTop: mScale(30),
            marginBottom: mScale(54)
          }}
        />

        <Button
          title={"CONTINUE WITH GOOGLE"}
          style={{
            ...SHADOW,
            backgroundColor: "#40F7A5",
            marginBottom: mScale(32)
          }}
          textStyle={{
            fontFamily: "CircularStd-Medium",
            color: "#000",
            marginLeft: mScale(30)
          }}
          image={images.Google}
          ImageStyle={{ height: 30, width: 30, marginLeft: mScale(18) }}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
        <Button
          title={"SIGN IN WITH EMAIL"}
          style={{ ...SHADOW, backgroundColor: "#40F7A5" }}
          textStyle={{
            fontFamily: "CircularStd-Medium",
            color: "#000",
            marginLeft: mScale(30)
          }}
          image={images.email}
          ImageStyle={{ marginLeft: mScale(18) }}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
        />
        <Text
          style={{
            fontFamily: "CircularStd-Book",
            fontSize: mScale(9),
            textAlign: "center",
            position: "absolute",
            bottom: mScale(20),
            marginHorizontal: mScale(70)
          }}
        >
          {"By Login Or Register, You Agree To Be Bound By Terms Of Services"}
        </Text>
      </View>
    );
  }
}
export default LoginOption;
