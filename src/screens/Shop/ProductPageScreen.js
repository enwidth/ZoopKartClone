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
import { ImagesPath } from "../../constants/ImagesPath";
import Button from "../auth/components/Button";
const { height, width } = Dimensions.get("window");
class ProductPageScreen extends Component {
  constructor(props) {
    super(props);
    const data = this.props.navigation.getParam("item", null);
    this.state = { data };
  }

  renderImage(data) {
    return (
      <View
        style={{
          flex: 0.6,
          backgroundColor: "#f5f5f6",

          width,
          height: mScale(200),

          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginTop: mScale(20),

            marginRight: mScale(20),
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <ImageBackground
            source={images.Circle}
            style={{
              height: mScale(40),
              width: mScale(40),
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image source={images.Cross} />
          </ImageBackground>
        </TouchableOpacity>
        <Image
          resizeMode="stretch"
          source={ImagesPath(data.image)}
          style={{ width, height: height / 3 }}
        />
      </View>
    );
  }
  renderDetails(data) {
    return (
      <View
        style={{
          flex: 0.4,
          backgroundColor: "#fff",
          width,
          height: mScale(200),
          paddingHorizontal: mScale(30)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: mScale(27)
          }}
        >
          <Text
            style={{
              color: "#0A1734",

              fontFamily: "CircularStd-Bold",
              fontSize: mScale(18)
            }}
          >
            {data.name}
          </Text>
          <Text
            style={{
              color: "#04092B",

              fontFamily: "CircularStd-Book",
              fontSize: mScale(18),
              marginLeft: mScale(27)
            }}
          >
            {data.currentPrice}
          </Text>
        </View>
        <Text
          style={{
            color: "grey",
            marginTop: 10,
            fontFamily: "CircularStd-Bold",
            fontSize: mScale(16)
          }}
        >
          {data.des}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginLeft: mScale(20),
            marginTop: mScale(20)
          }}
        >
          <Text
            style={{
              color: "#000",

              fontFamily: "CircularStd-Bold",
              fontSize: mScale(20)
            }}
          >
            {"Rating"}
          </Text>
          <Image
            source={ImagesPath(data.rating)}
            style={{
              alignSelf: "center",
              marginLeft: mScale(20),
              height: mScale(20),
              width: mScale(100)
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: mScale(20),
            marginTop: mScale(20)
          }}
        >
          <Text
            style={{
              color: "#000",

              fontFamily: "CircularStd-Bold",
              fontSize: mScale(20)
            }}
          >
            {"Offer"}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              marginLeft: mScale(30),

              fontFamily: "CircularStd-Book",
              fontSize: mScale(20)
            }}
          >
            {data.off}
          </Text>
        </View>
      </View>
    );
  }
  render() {
    const { data } = this.state;

    return (
      <View
        style={{
          flex: 1
        }}
      >
        {this.renderImage(data)}
        {this.renderDetails(data)}
        <View
          style={{
            width,
            height: mScale(55),
            backgroundColor: "#000",
            flexDirection: "row"
          }}
        >
          <Text
            style={{
              alignSelf: "flex-start",
              color: "#fff",
              marginTop: mScale(12),
              marginLeft: mScale(30),
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(20)
            }}
          >
            {"Checkout"}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end"
            }}
          >
            <Image
              source={images.Next}
              style={{
                marginRight: mScale(30),
                height: mScale(25),
                width: mScale(25)
              }}
            />
          </View>
        </View>
        <Button
          title={"Add to Cart"}
          style={{
            ...SHADOW,
            backgroundColor: "#40F7A5",
            marginHorizontal: mScale(30),
            justifyContent: "center",
            alignItems: "center",
            marginBottom: mScale(50),
            marginTop: mScale(20)
          }}
          textStyle={{
            fontFamily: "CircularStd-Medium",
            color: "#000"
          }}
          onPress={() => this.props.navigation.navigate("CartScreen")}
        />
      </View>
    );
  }
}
export default ProductPageScreen;
