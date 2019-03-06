import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Alert
} from "react-native";
import { mScale } from "../../constants/Utils";
import { ImagesPath } from "../../constants/ImagesPath";
import { FlatList } from "react-native-gesture-handler";
import Header from "./Components/Header";
import CategoryHeader from "./Components/CategoryHeader";
const { width } = Dimensions.get("window");
class CategoryItemsScreeen extends Component {
  constructor(props) {
    super(props);

    // passing the data via naviagtion through previous screen i.e; HomeScreen

    const data = this.props.navigation.getParam("data", null);
    this.state = { data };
  }

  renderCategory(category) {
    return (
      <View
        style={{
          flex: 1,

          marginTop: mScale(30),
          width: width - mScale(44),
          marginHorizontal: mScale(22),
          height: mScale(136),
          flexDirection: "row",
          overflow: "hidden",
          borderRadius: mScale(5)
        }}
      >
        <View
          style={{
            backgroundColor: "#000",
            width: mScale(33),
            height: mScale(136),
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              height: 100,

              width: mScale(136),
              alignItems: "center",
              justifyContent: "center",
              //to align text in single line so that that entire line will get rotated
              position: "absolute"
            }}
          >
            <Text
              style={{
                color: "#00ffa2",
                fontSize: mScale(13),

                //to rotate the text

                transform: [{ rotate: "270deg" }],
                fontFamily: "CircularStd-Medium",
                textAlign: "center"
              }}
            >
              {category.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#00ffa2",

            width: mScale(33),
            height: mScale(136),
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              height: 100,

              width: mScale(136),
              alignItems: "center",
              justifyContent: "center",
              //to align text in single line so that entire line will get rotated
              position: "absolute"
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: mScale(13),
                //to rotate the text
                transform: [{ rotate: "270deg" }],
                fontFamily: "CircularStd-Medium",
                textAlign: "center"
              }}
            >
              {category.offer}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            //if title of category is mobile go to nest screen

            if (category.title === "Mobile") {
              this.props.navigation.navigate("CategoryItemListScreen", {
                data: category
              });
            }
            //if title of category is not mobile pop up alert
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
            source={ImagesPath(category.image)}
            style={{
              height: mScale(136),
              width: width - mScale(44),
              marginLeft: mScale(-25)
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <Header />
        <CategoryHeader
          title={data.categoryName}
          onPress={() => this.props.navigation.navigate("HomeScreen")}
        />

        <FlatList
          data={data.items}
          renderItem={({ item }) => this.renderCategory(item)}
        />
      </View>
    );
  }
}
export default CategoryItemsScreeen;
