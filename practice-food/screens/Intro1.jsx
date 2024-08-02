import * as React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import SafeAreaAndroid from "../components/SafeAreaAndroid";

const Intro1 = () => {
    const navigation = useNavigation();

    const handlePress = () => {
       
        navigation.navigate('SignIn');
    };

    return (
        <SafeAreaView className={SafeAreaAndroid.AndroidSafeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <View className="flex-1 items-center">
                <Image
                    source={require("../assets/images/intro/ellipse-main.png")}
                    contentFit="cover"
                    className='absolute h-[550] w-[550] top-[-25%]'
                />
                <Image
                    source={require("../assets/images/intro/introFood.png")}
                    contentFit="cover"
                    className='w-[431] h-[647] absolute -z-10 bottom-[-5]'
                />
                <View className='items-center py-16'>
                    <View className=''>
                        <Text style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_11xl }} className='text-center'>
                            Order Food{'\n'}
                            <Text style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_11xl }} className='text-green-700'>Without cash</Text>
                        </Text>
                    </View>
                    <View className='mt-1'>
                        <Text style={{ fontFamily: FontFamily.poppinsMedium, fontSize: FontSize.size_mini }} className='text-[#868889] text-center' >
                            Enjoy a hassle-free experience and{'\n'}
                            avoid the need to carry cash with you{'\n'}
                            when ordering food.
                        </Text>
                    </View>
                </View>
                <View className='flex-1 absolute bottom-8 w-[80%] h-[6%] justify-center items-center'>
                    <LinearGradient
                        colors={["#007022", "#54d17a", "#bcffd0"]}
                        style={{ width: '100%', height: '100%', borderRadius: Border.radiusMd }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.9, y: 0 }}
                        className='rounded-xl'
                    >
                        <Pressable className='w-full h-full justify-center items-center' onPress={handlePress}>
                            <Text className='text-white' style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_lg }}>Get Started</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Intro1;
