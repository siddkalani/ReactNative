import * as React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { StyleSheet, Pressable, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import SafeAreaAndroid from "../components/SafeAreaAndroid";
import { AppRegistry, TextInput } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as Icon from 'react-native-feather'

const SignIn = () => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View className='flex-1'>
            <StatusBar translucent backgroundColor="transparent" />
            <View className='flex-1 '>
                <Image
                    source={require("../assets/images/signIn/signIn.png")}
                    contentFit='cover'
                    className='absoulte h-[60%] w-[100%] -z-10'
                />
                <View className='bg-[#F4F5F9] flex-1 mt-[-20] rounded-t-2xl px-4 py-6 space-y-6'>
                    <View className=''>
                        <Text style={{ fontFamily: FontFamily.poppinsBold, fontSize: FontSize.textRegularLowercase_size }}>Wecome back!</Text>
                        <Text style={{ fontFamily: FontFamily.poppinsMedium, fontSize: FontSize.size_mini }} className='text-[#868889] mt-[-4]'>Sign in to your account</Text>
                    </View>
                    <View className='space-y-2'>
                        <View className='flex-row items-center bg-[#FFFFFF] p-3 rounded-md'>
                            <Icon.Mail
                                height='20'
                                width='20'
                                stroke='gray'
                            />
                            <TextInput
                                placeholder='Student ID number'
                                className='flex-1 ml-3'
                            />
                        </View>
                        <View className='flex-row items-center bg-[#FFFFFF] p-3 rounded-md'>
                            <Icon.Lock
                                height='20'
                                width='20'
                                stroke='gray'
                            />
                            <TextInput
                                placeholder='Password'
                                className='flex-1 ml-3'
                            />

                        </View>
                    </View>
                    <View className='items-end'>
                        <Text className='text-[#407EC7]' style={{ fontFamily: FontFamily.poppinsMedium, fontSize: FontSize.size_mini }}>Forgot password</Text>
                    </View>
                    <LinearGradient
                        colors={["#007022", "#54d17a", "#bcffd0"]}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1.9, y: 0 }}
                        className='rounded-xl'
                    >
                        <Pressable className='p-3 justify-center items-center' onPress={handlePress}>
                            <Text className='text-white' style={{ fontFamily: FontFamily.poppinsSemiBold, fontSize: FontSize.size_lg }}>Get Started</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
            </View>

        </View>
    );
};

export default SignIn;
