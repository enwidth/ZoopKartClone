import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import images from "../../constants/Images";
import { mScale } from "../../constants/Utils";
import Button from "./components/Button";
import TextValueInput from "./components/TextValueInput";
const { height, width } = Dimensions.get("window");

class SignUpScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, height, width, backgroundColor: "#fff" }}>
        <Image
          source={images.ZoopKart}
          resizeMode="stretch"
          style={{
            marginBottom: mScale(40),
            height: height * 0.2,
            width: height * 0.2,
            marginHorizontal: mScale(45),
            marginTop: mScale(50),
            alignSelf: "center"
          }}
        />

        {/* rendering the TextValueInput class three times 
        for textInput as email id , Password and address and pasšsing the placeholders as props*/}

        <TextValueInput placeholder={"Email Address"} />
        <TextValueInput placeholder={" Password "} secureTextEntry={true} />
        <TextValueInput placeholder={" Address "} image={images.Location} />

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
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />
        <Button
          style={{
            height: mScale(55),
            backgroundColor: "#40F7A5",
            marginBottom: mScale(25),
            justifyContent: "center"
          }}
          title={"Back to Login"}
          textStyle={{
            color: "#fff",
            fontFamily: "CircularStd-Medium",
            fontSize: mScale(20)
          }}
          onPress={() => this.props.navigation.navigate("LoginScreen")}
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
export default SignUpScreen;
