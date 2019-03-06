import React from "react";
import { View, Text, Image } from "react-native";

import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import OnBoardingFirstScreen from "../screens/onBoarding/OnBoardingFirstScreen";
import OnBoardingSecondScreen from "../screens/onBoarding/OnBoardingSecondScreen";
import OnBoardingThirdScreen from "../screens/onBoarding/OnBoardingThirdScreen";
import OnBoardingFourthScreen from "../screens/onBoarding/OnBoardingFourthScreen";

import LoginOption from "../screens/auth/LoginOption";
import LoginScreen from "../screens/auth/LoginScreen";
import SignUpScreen from "../screens/auth/SignUp";

import HomeScreen from "../screens/Shop/HomeScreen";
import CategoryItemsScreen from "../screens/Shop/CategoryItemsScreen";
import CategoryItemListScreen from "../screens/Shop/CategoryItemListScreen";
import ProductPageScreen from "../screens/Shop/ProductPageScreen";
import CartScreen from "../screens/Shop/CartScreen";
const OnBoardingStack = createStackNavigator(
  {
    OnBoardingFirstScreen,
    OnBoardingSecondScreen,
    OnBoardingThirdScreen,
    OnBoardingFourthScreen
  },
  {
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    LoginOption,
    LoginScreen,
    SignUpScreen
  },
  {
    headerMode: "none"
  }
);

const ShopStack = createStackNavigator(
  {
    HomeScreen,
    CategoryItemsScreen,
    CategoryItemListScreen,
    ProductPageScreen,
    CartScreen
  },
  { headerMode: "none" }
);

const MainNavigator = createSwitchNavigator(
  {
    OnBoarding: OnBoardingStack,
    Auth: AuthStack,
    Shop: ShopStack
  },
  {
    initialRouteName: "OnBoarding"
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;
