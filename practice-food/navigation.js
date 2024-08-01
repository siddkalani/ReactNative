// navigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro1 from './screens/Intro1';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="intro"
          component={Intro1}
        />
        {/* <Stack.Screen
          name="MangInasalPage"
          component={MangInasalPage}
        />
        <Stack.Screen
          name="FoodDetailsFromInasalMenu"
          component={FoodDetailsFromInasalMenu}
        />
        <Stack.Screen
          name="Search"
          component={Search}
        />
        <Stack.Screen
          name="AddToCartFromHome"
          component={AddToCartFromHome}
        />
        <Stack.Screen
          name="ShoppingCartDelete"
          component={ShoppingCartDelete}
        />
        <Stack.Screen
          name="SignIn1"
          component={SignIn1}
        />
        <Stack.Screen
          name="FoodDetailsAddQuantity"
          component={FoodDetailsAddQuantity}
        />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
        />
        <Stack.Screen
          name="PaymentMethod2SelectedCard"
          component={PaymentMethod2SelectedCard}
        />
        <Stack.Screen
          name="PaymentMethodSelectOneOnly"
          component={PaymentMethodSelectOneOnly}
        />
        <Stack.Screen
          name="AddToCartFromFoodDetails"
          component={AddToCartFromFoodDetails}
        />
        <Stack.Screen
          name="ConfirmPayment"
          component={ConfirmPayment}
        />
        <Stack.Screen
          name="ShoppingCart2SelectedFood"
          component={ShoppingCart2SelectedFood}
        />
        <Stack.Screen
          name="ReviewSuccessful"
          component={ReviewSuccessful}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
        />
        <Stack.Screen
          name="ShoppingCart1SelectedFood"
          component={ShoppingCart1SelectedFood}
        />
        <Stack.Screen
          name="ShoppingCart3"
          component={ShoppingCart3}
        />
        <Stack.Screen
          name="PaymentMethod1SelectingCard"
          component={PaymentMethod1SelectingCard}
        />
        <Stack.Screen
          name="AddToCartFromSearch"
          component={AddToCartFromSearch}
        />
        <Stack.Screen
          name="Intro1"
          component={Intro1}
        />
        <Stack.Screen
          name="AboutMe"
          component={AboutMe}
        />
        <Stack.Screen
          name="PaymentSuccessful"
          component={PaymentSuccessful}
        />
        <Stack.Screen
          name="AddToCartFromInasalFoodDetails"
          component={AddToCartFromInasalFoodDetails}
        />
        <Stack.Screen
          name="ConfirmPayment1"
          component={ConfirmPayment1}
        />
        <Stack.Screen
          name="ShoppingCart0SelectedFood"
          component={ShoppingCart0SelectedFood}
        />
        <Stack.Screen
          name="WriteReview1"
          component={WriteReview1}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          name="FoodDetailsFromSearchbar"
          component={FoodDetailsFromSearchbar}
        />
        <Stack.Screen
          name="ReviewsAdded"
          component={ReviewsAdded}
        />
        <Stack.Screen
          name="WriteReview2"
          component={WriteReview2}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          name="ShoppingCart4SelectedFood"
          component={ShoppingCart4SelectedFood}
        />
        <Stack.Screen
          name="Reviews"
          component={Reviews}
        />
        <Stack.Screen
          name="AboutSuccessful"
          component={AboutSuccessful}
        />
        <Stack.Screen
          name="Intro3"
          component={Intro3}
        />
        <Stack.Screen
          name="FoodDetailsFromHomepage"
          component={FoodDetailsFromHomepage}
        />
        <Stack.Screen
          name="AboutMe1"
          component={AboutMe1}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
