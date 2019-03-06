import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import images from "../../constants/Images";
import { mScale } from "../../constants/Utils";
import TextValueInput from "./components/TextValueInput";
import Button from "../auth/components/Button";
const { height, width } = Dimensions.get("window");

class LoginScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, height, width, backgroundColor: "#fff" }}>
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

        {/* rendering the TextValueInput class two times 
        for textInput as email id and Password and pasšsing the placeholders as props*/}

        <TextValueInput placeholder={"Email Address"} />
        <TextValueInput placeholder={" Password "} secureTextEntry={true} />
        <Button
          style={{
            height: mScale(55),
            backgroundColor: "#40F7A5",
            marginBottom: mScale(25),
            justifyContent: "center"
          }}
          title={"Login"}
          textStyle={{
            color: "#fff",
            fontFamily: "CircularStd-Medium",
            fontSize: mScale(20)
          }}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
        {/* rendering the Button class two times for 
        login amd sign up and passing the texts as props */}

        <Button
          style={{
            height: mScale(55),
            backgroundColor: "#000",
            marginBottom: mScale(25),
            justifyContent: "center"
          }}
          title={"Sign Up"}
          textStyle={{
            color: "#fff",
            fontFamily: "CircularStd-Medium",
            fontSize: mScale(20)
          }}
          onPress={() => this.props.navigation.navigate("SignUpScreen")}
        />

        <Text
          style={{
            fontFamily: "CircularStd-Book",
            fontSize: mScale(9),
            textAlign: "center",
            alignSelf: "center",
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
export default LoginScreen;
