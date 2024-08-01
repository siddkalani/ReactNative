import * as React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import SafeAreaAndroid from "../components/SafeAreaAndroid";

const Intro1 = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView className={SafeAreaAndroid.AndroidSafeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Image

            />
            <View className="flex-1 items-center">
                <View className='items-center py-16'>
                    <View className=''><Text style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_11xl }} className=''>Order Food</Text></View>
                    <View className='mt-[-5]'><Text style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_11xl }} className='text-green-700 '>Wihout cash</Text></View>
                    <View className=''><Text style={{ fontFamily: FontFamily.poppinsMedium, fontSize: FontSize.size_mini }} className='text-[#868889] text-center' >
                        Enjoy a hassle-free experience and{'\n'}
                        avoid the need to carry cash with you{'\n'}
                        when ordering food.
                    </Text></View>

                </View>
            </View>
        </SafeAreaView>
    );
};


export default Intro1;
