import React, { Component } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { mScale } from "../../constants/Utils";
import images from "../../constants/Images";
import Button from "../auth/components/Button";
const { height, width } = Dimensions.get("window");
class OnBoardingFirstScreen extends Component {
  //Topmost component :- Different brand names and logos
  renderTopComponent() {
    return (
      <View
        style={{
          marginTop: mScale(59),
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          width,
          height: mScale(55)
        }}
      >
        <Image source={images.adidas} />
        <Image source={images.nike} />
        <Image source={images.CK} />
        <Image source={images.Smith} />
      </View>
    );
  }

  renderMiddleComponent() {
    return (
      <View>
        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(30),
            alignSelf: "center",
            marginTop: mScale(35)
          }}
        >
          {"Best Brands"}
        </Text>
        <Image
          source={images.undrawOnlineShopping}
          resizeMode="stretch"
          style={{
            marginTop: mScale(16),
            alignSelf: "center",
            width: width * 0.85,
            height: height * 0.3
          }}
        />
        <Text
          style={{
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(15),
            alignSelf: "center",
            marginTop: mScale(75)
          }}
        >
          {"Lowest Prices"}
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
          <Image source={images.GreenOval} />
          <Image source={images.BlackOval} />
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
          onPress={() =>
            this.props.navigation.navigate("OnBoardingSecondScreen")
          }
        />
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, height, width, backgroundColor: "#fff" }}>
        {this.renderTopComponent()}
        {this.renderMiddleComponent()}
        {this.renderBottomComponent()}
      </View>
    );
  }
}
export default OnBoardingFirstScreen;
