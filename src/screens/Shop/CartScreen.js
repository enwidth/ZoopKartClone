import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { mScale } from "../../constants/Utils";
import images from "../../constants/Images";
import { SHADOW } from "../../constants/Style";
const { height, width } = Dimensions.get("window");
class CartScreen extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam("item", null);
    this.state = { item: data };
  }

  renderHeader() {
    return (
      <View
        style={{
          width,
          height: mScale(150),
          backgroundColor: "#40F7A5",
          ...SHADOW
        }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: mScale(60),
            justifyContent: "space-between"
          }}
        >
          <Text
            style={{
              fontFamily: "CircularStd-Bold",
              fontSize: mScale(35),
              marginLeft: mScale(20)
            }}
          >
            {"Cart"}
          </Text>
          <TouchableOpacity
            style={{
              marginRight: mScale(20),
              justifyContent: "center",
              alignItems: "center"
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <ImageBackground
              source={images.ColoredClose}
              style={{
                height: mScale(40),
                width: mScale(40)
              }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginLeft: mScale(30),
            color: "#000",
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(16)
          }}
        >
          {"(1 Item)"}
        </Text>
      </View>
    );
  }

  renderDeal() {
    return (
      <View
        style={{
          width: mScale(75),
          height: mScale(25),
          marginLeft: mScale(20),
          backgroundColor: "#40f7a5",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "CircularStd-Medium",
            fontSize: mScale(15),
            color: "#000"
          }}
        >
          {"Deal"}
        </Text>
      </View>
    );
  }

  renderBottom() {
    return (
      <View
        style={{
          width: width - mScale(44),
          height: mScale(52),
          marginHorizontal: mScale(22),
          alignSelf: "center",
          backgroundColor: "#40F7A5",
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          style={{
            width: width / 2 - mScale(22),
            height: mScale(52),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(15)
            }}
          >
            {"Remove"}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: mScale(52),
            width: mScale(0.5),
            backgroundColor: "#000"
          }}
        />
        <View
          style={{
            width: width / 2 - mScale(22),
            height: mScale(52),
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <TouchableOpacity>
            <Image source={images.Add} />
          </TouchableOpacity>
          <Image source={images.NoOfItems} />
          <TouchableOpacity>
            <Image source={images.Remove} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  renderDetails() {
    return (
      <View
        style={{
          marginLeft: mScale(20),
          width: width / 2 - mScale(22)
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: mScale(18),
            fontFamily: "CircularStd-Book"
          }}
        >
          {"Samsung Galaxy"}
        </Text>
        <Image
          source={images.Rating}
          style={{
            height: mScale(10),
            width: mScale(60),
            marginTop: mScale(2)
          }}
        />
        <View style={{ flexDirection: "row", marginTop: mScale(7) }}>
          <Text style={{ color: "#fff", textDecorationLine: "line-through" }}>
            {"$699.99"}
          </Text>
          <Text style={{ color: "#40F7A5", marginLeft: mScale(3.5) }}>
            {"40% off"}
          </Text>
        </View>
        <Text style={{ color: "#40F7A5" }}>{"$539.99"}</Text>
      </View>
    );
  }

  renderMiddle() {
    return (
      <View
        style={{
          ...SHADOW,
          width: width - mScale(44),
          height: mScale(192),
          marginHorizontal: mScale(22),
          alignSelf: "center",
          marginBottom: mScale(10),
          marginTop: mScale(30)
        }}
      >
        <View
          style={{
            width: width - mScale(44),
            height: mScale(140),
            marginHorizontal: mScale(22),
            alignSelf: "center",
            backgroundColor: "#000",
            flexDirection: "row"
          }}
        >
          <View style={{ width: width / 2 - mScale(22) }}>
            {this.renderDeal()}
            <View
              style={{
                justifyContent: "center",

                flex: 1
              }}
            >
              {this.renderDetails()}
            </View>
          </View>
          <View
            style={{
              height: mScale(120),
              marginVertical: mScale(10),
              width: mScale(2),
              backgroundColor: "#40F7A5"
            }}
          />
          <View
            style={{
              flex: 1,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image source={images.MobileOne} />
          </View>
        </View>
        {this.renderBottom()}
      </View>
    );
  }

  renderCosts(text, price, image) {
    return (
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: mScale(30)
        }}
      >
        <View
          style={{
            alignSelf: "flex-start",
            marginLeft: mScale(30),
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "CircularStd-Book",
              fontSize: mScale(20)
            }}
          >
            {text}
          </Text>
          {image == "fee" && (
            <Image
              source={images.Fee}
              style={{ marginLeft: 20, alignSelf: "center" }}
            />
          )}
        </View>
        <Text
          style={{
            marginRight: mScale(30),
            color: "#000",
            fontFamily: "CircularStd-Book",
            fontSize: mScale(20)
          }}
        >
          {price}
        </Text>
      </View>
    );
  }

  renderLower() {
    return (
      <View style={{ flex: 1 }}>
        {this.renderCosts("Starting Subtotal", "$642.96")}
        {this.renderCosts("Subtotal", "$642.96")}
        {this.renderCosts("Shipping Fee", "$42.96", "fee")}
        {this.renderCosts("Estimated Tax", "$192.96", "fee")}

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: mScale(10)
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              marginLeft: mScale(30)
            }}
          >
            <Text
              style={{
                color: "#000",
                fontFamily: "CircularStd-Black",
                fontSize: mScale(30)
              }}
            >
              {"Order Total"}
            </Text>
          </View>
          <Text
            style={{
              marginRight: mScale(30),
              color: "#000",
              fontFamily: "CircularStd-Black",
              fontSize: mScale(30)
            }}
          >
            {"$684.96"}
          </Text>
        </View>
        <Text
          style={{
            fontSize: mScale(10),
            alignSelf: "center",
            marginTop: 5,
            color: "#979797"
          }}
        >
          {"By placing this order you agree to ZoopKart’s Terms. See Details"}
        </Text>
        <TouchableOpacity
          style={{
            height: mScale(55),
            width: width - mScale(88),
            alignSelf: "center",
            borderWidth: 3,
            borderColor: "#40F7A5",
            marginTop: mScale(20),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "#dadada",
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(18)
            }}
          >
            {"Add a promo code"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1, height, width, backgroundColor: "#fff" }}>
        {this.renderHeader()}
        {this.renderMiddle()}
        {this.renderLower()}
      </View>
    );
  }
}
export default CartScreen;
