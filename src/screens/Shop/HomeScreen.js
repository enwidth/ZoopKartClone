// word of caution :- to check full functionality
//pleasae click on electronics text only and in next screen on mobile category

import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert
} from "react-native";
import { mScale, vScale } from "../../constants/Utils";
import images from "../../constants/Images";
import { ImagesPath } from "../../constants/ImagesPath";
import Carousel from "react-native-snap-carousel";
import { SHADOW } from "../../constants/Style";
import { FlatList } from "react-native-gesture-handler";
import Header from "./Components/Header";

//JSON data for Corousel Header
const HeaderJSON = require("./Components/SlidingHeader.json");

//JSON data for two upper category
const topCategoryJSON = require("./Components/TopCategory.json");

//JSON data for next two lower category
const bottomCategoryJSON = require("./Components/BottomCategory.json");

const { width } = Dimensions.get("window");
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerJSON: HeaderJSON,
      topCategories: topCategoryJSON,
      bottomCategories: bottomCategoryJSON
    };
  }

  renderMoveNext() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <Image
          source={images.Next}
          style={{ marginBottom: mScale(25), marginRight: mScale(20) }}
        />
      </View>
    );
  }

  renderSlidingHeader(item, index) {
    if (index === 0)
      return (
        <View
          style={{
            width,
            height: mScale(220)
          }}
        >
          <ImageBackground
            source={ImagesPath(item.image)}
            style={{ height: mScale(200), width }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: mScale(20),
                marginLeft: mScale(20)
              }}
            >
              <Text
                style={{
                  color: "#40F7A5",
                  fontSize: mScale(25),
                  marginRight: mScale(80),
                  fontFamily: "CircularStd-Bold"
                }}
              >
                {item.text}
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: mScale(10)
            }}
          >
            <Image source={images.GreenOval} />
            <Image
              source={images.BlackOval}
              style={{ marginLeft: mScale(5) }}
            />
            <Image
              source={images.BlackOval}
              style={{ marginLeft: mScale(5) }}
            />
          </View>
        </View>
      );

    if (index === 1)
      return (
        <View
          style={{
            width,
            height: mScale(220),

            marginTop: mScale(20)
          }}
        >
          <ImageBackground
            source={ImagesPath(item.image)}
            style={{ height: mScale(200), width }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: mScale(20),
                marginLeft: mScale(20)
              }}
            >
              <Text
                style={{
                  color: "#40F7A5",
                  fontSize: mScale(25),
                  marginRight: mScale(80),
                  fontFamily: "CircularStd-Bold"
                }}
              >
                {item.text}
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: mScale(10)
            }}
          >
            <Image source={images.BlackOval} />
            <Image
              source={images.GreenOval}
              style={{ marginLeft: mScale(5) }}
            />
            <Image
              source={images.BlackOval}
              style={{ marginLeft: mScale(5) }}
            />
          </View>
        </View>
      );
    if (index === 2)
      return (
        <View
          style={{
            width,
            height: mScale(80),

            marginTop: mScale(20)
          }}
        >
          <ImageBackground
            source={ImagesPath(item.image)}
            style={{ height: mScale(200), width }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                marginBottom: mScale(20),
                marginLeft: mScale(20)
              }}
            >
              <Text
                style={{
                  color: "#40F7A5",
                  fontSize: mScale(25),
                  marginRight: mScale(80),
                  fontFamily: "CircularStd-Bold"
                }}
              >
                {item.text}
              </Text>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginTop: mScale(10)
            }}
          >
            <Image source={images.BlackOval} />

            <Image
              source={images.BlackOval}
              style={{ marginLeft: mScale(5) }}
            />
            <Image
              source={images.GreenOval}
              style={{ marginLeft: mScale(5) }}
            />
          </View>
        </View>
      );
  }

  renderCategoryProduct(item) {
    return (
      <TouchableOpacity
        style={{ ...SHADOW, overflow: "hidden", borderRadius: mScale(10) }}
        onPress={() => {
          //if title of item is mobile go to nest screen
          if (item.title === "Mobile") {
            this.props.navigation.navigate("CategoryItemListScreen", {
              data: item
            });
          }
          //if title of item is not mobile pop up alert
          else {
            Alert.alert(
              "Please",
              "Press Mobile in electronics category",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
          }
        }}
      >
        <ImageBackground
          source={ImagesPath(item.image)}
          resizeMode="cover"
          style={{
            width: vScale(130),
            height: vScale(140),
            paddingRight: mScale(5)
          }}
        >
          <Text
            style={{
              marginLeft: mScale(20),
              marginRight: mScale(10),
              marginTop: mScale(10),
              color: "#40F7A5",
              fontFamily: "CircularStd-Bold",
              fontSize: mScale(15)
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              marginLeft: mScale(20),

              marginTop: mScale(1),
              color: "#fff",
              fontFamily: "CircularStd-Bold",
              fontSize: mScale(11)
            }}
          >
            {item.subtitle}
          </Text>
          {this.renderMoveNext()}
        </ImageBackground>
      </TouchableOpacity>
    );
  }

  renderCategoriesName(category) {
    return (
      <TouchableOpacity
        style={{
          marginLeft: mScale(20),
          marginTop: mScale(13),
          flexDirection: "row",
          marginBottom: mScale(10),
          alignItems: "center"
        }}
        onPress={() =>
          this.props.navigation.navigate("CategoryItemsScreen", {
            data: category
          })
        }
      >
        <View>
          <Text
            style={{
              fontFamily: "CircularStd-Bold",
              fontSize: mScale(18),
              color: "#000",
              marginRight: mScale(5)
            }}
          >
            {category.categoryName}
          </Text>

          <View
            style={{
              height: mScale(3),
              width: mScale(23),
              backgroundColor: "#40F7A5"
            }}
          />
        </View>
        <Image source={images.CatTop} />
      </TouchableOpacity>
    );
  }

  renderCategories({ category }) {
    return (
      <View>
        {this.renderCategoriesName(category)}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={category.items}
          renderItem={({ item }) => this.renderCategoryProduct(item)}
        />
      </View>
    );
  }

  render() {
    let { bottomCategories } = this.state;
    let { topCategories } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 0.5 }}>
            {/* used the third party library "snap-corouse" for corousel effect in top part of screen */}

            <Carousel
              data={this.state.headerJSON}
              horizontal
              renderItem={({ item, index }) =>
                this.renderSlidingHeader(item, index)
              }
              itemWidth={width}
              sliderWidth={width}
              windowSize={1}
            />
          </View>

          {/* using two different JSON files for upper JSON and lower JSON */}

          {topCategories.map(category => {
            return this.renderCategories({ category });
          })}

          <ImageBackground
            source={images.BrandNumber}
            style={{
              width,
              height: vScale(140),
              marginVertical: mScale(42),
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: mScale(35),
                color: "#40F7A5",
                fontFamily: "CircularStd-Bold",
                alignSelf: "center"
              }}
            >
              {"Over 50,000 brands"}
            </Text>
          </ImageBackground>

          {bottomCategories.map(category => {
            return this.renderCategories({ category });
          })}
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
