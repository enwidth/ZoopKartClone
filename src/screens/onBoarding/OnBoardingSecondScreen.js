import React, { Component } from "react";
import { View, Text, Dimensions, Image, ImageBackground } from "react-native";
import { mScale } from "../../constants/Utils";
import images from "../../constants/Images";
import Button from "../auth/components/Button";
const { height, width } = Dimensions.get("window");
class OnBoardingSecondScreen extends Component {
  renderMiddleComponent() {
    return (
      <View>
        {/* center aligned text at top */}
        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(40),
            textAlign: "center",
            alignSelf: "center",
            marginTop: mScale(68)
          }}
        >
          {"Limitless Collection"}
        </Text>
        <Image
          resizeMode="stretch"
          source={images.Wallet}
          style={{
            marginTop: mScale(50),
            width: width - mScale(40),
            marginHorizontal: mScale(20),
            height: height * 0.3,
            alignSelf: "center"
          }}
        />
        <Text
          style={{
            fontFamily: "CircularStd-Black",
            fontSize: mScale(15),
            textAlign: "center",
            alignSelf: "center",
            marginTop: mScale(65)
          }}
        >
          {"Deals Like Never Before !"}
        </Text>
      </View>
    );
  }
  renderBottomComponent() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          marginBottom: mScale(20)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            width: mScale(55),
            justifyContent: "space-around"
          }}
        >
          <Image source={images.BlackOval} />
          <Image source={images.GreenOval} />
          <Image source={images.BlackOval} />
          <Image source={images.BlackOval} />
        </View>
        <Button
          title={"Next"}
          textStyle={{
            alignSelf: "center",
            color: "#fff",
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(20)
          }}
          style={{
            backgroundColor: "#40F7A5",
            alignItems: "center",
            justifyContent: "center",
            marginTop: mScale(12)
          }}
          // go to third screen
          onPress={() =>
            this.props.navigation.navigate("OnBoardingThirdScreen")
          }
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, height, width }}>
        <View
          style={{
            marginHorizontal: mScale(20)
          }}
        >
          {/* Background image of screen with shoes icons */}
          <ImageBackground
            resizeMode="contain"
            source={images.OnBoardingSecondScreenBack}
            style={{
              height: height - mScale(100),
              width: width - mScale(40),
              alignSelf: "center"
            }}
          >
            {this.renderMiddleComponent()}
          </ImageBackground>
        </View>
        {this.renderBottomComponent()}
      </View>
    );
  }
}
export default OnBoardingSecondScreen;
