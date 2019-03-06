import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { mScale } from "../../constants/Utils";
import images from "../../constants/Images";
import Button from "../auth/components/Button";
const { height, width } = Dimensions.get("window");
class OnBoardingThirdScreen extends Component {
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
          <Image source={images.BlackOval} />
          <Image source={images.GreenOval} />
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
          onPress={() =>
            this.props.navigation.navigate("OnBoardingFourthScreen")
          }
        />
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, height, width }}>
        <View>
          {/* center aligned text at top */}
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
            {"Superfast Delivery"}
          </Text>
          {/* middle image */}
          <Image
            resizeMode="contain"
            source={images.OnBoardingThirdScreen}
            style={{
              marginTop: mScale(50),
              width,

              height: height * 0.32,
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
            {"Express Delivery"}
          </Text>
        </View>
        {this.renderBottomComponent()}
      </View>
    );
  }
}
export default OnBoardingThirdScreen;
