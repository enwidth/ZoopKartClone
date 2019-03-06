import React, { Component } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { mScale } from "../../constants/Utils";

import { ImagesPath } from "../../constants/ImagesPath";
import { SHADOW } from "../../constants/Style";
import { FlatList } from "react-native-gesture-handler";
import Header from "./Components/Header";
import CategoryHeader from "./Components/CategoryHeader";
const { width } = Dimensions.get("window");

class CategoryItemsListScreen extends Component {
  constructor(props) {
    super(props);

    // passing the data via naviagtion through previous screen i.e; CategoryItemsScreen

    const item = this.props.navigation.getParam("data", null);
    this.state = { data: item };
  }

  renderBottom(data) {
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
          onPress={() =>
            this.props.navigation.navigate("ProductPageScreen", { item: data })
          }
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(15)
            }}
          >
            {"Know More"}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: mScale(52),
            width: mScale(0.5),
            backgroundColor: "#000"
          }}
        />
        <TouchableOpacity
          style={{
            width: width / 2 - mScale(22),
            height: mScale(52),
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() =>
            this.props.navigation.navigate("CartScreen", { item: data })
          }
        >
          <Text
            style={{
              color: "#000",
              fontFamily: "CircularStd-Medium",
              fontSize: mScale(15)
            }}
          >
            {"Add to cart"}
          </Text>
        </TouchableOpacity>
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

  renderDetails(data) {
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
          {data.name}
        </Text>
        <Image
          source={ImagesPath(data.rating)}
          style={{
            height: mScale(10),
            width: mScale(60),
            marginTop: mScale(2)
          }}
        />
        <View style={{ flexDirection: "row", marginTop: mScale(7) }}>
          <Text style={{ color: "#fff", textDecorationLine: "line-through" }}>
            {data.previousPrice}
          </Text>
          <Text style={{ color: "#40F7A5", marginLeft: mScale(3.5) }}>
            {data.off}
          </Text>
        </View>
        <Text style={{ color: "#40F7A5" }}>{data.currentPrice}</Text>
      </View>
    );
  }

  renderData(data) {
    return (
      <View
        style={{
          ...SHADOW,
          width: width - mScale(44),
          height: mScale(192),
          marginHorizontal: mScale(22),
          alignSelf: "center",

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
            {data.deal && this.renderDeal()}
            <View
              style={{
                justifyContent: "center",

                flex: 1
              }}
            >
              {this.renderDetails(data)}
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
            <Image source={ImagesPath(data.image)} />
          </View>
        </View>
        {this.renderBottom(data)}
      </View>
    );
  }
  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <CategoryHeader
          title={data.title}
          onPress={() => this.props.navigation.goBack()}
        />
        <FlatList
          data={data.item}
          renderItem={({ item }) => this.renderData(item)}
        />
      </View>
    );
  }
}
export default CategoryItemsListScreen;
