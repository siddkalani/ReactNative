import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView } from 'react-native';
import React from 'react';
import SafeAreaAndroid from './SafeAreaAndroid';
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme';
import Categories from '../components/Categories';

export default function HomeScreen() {
  return (
    <SafeAreaView className={SafeAreaAndroid.AndroidSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
          <Icon.Search
            height='25'
            width='25'
            stroke='gray'
          />
          <TextInput
            placeholder='Restaurents'
            className='flex-1 ml-2'
          />
          <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
            <Icon.MapPin height='20' width='20' stroke='gray' />
            <Text className='text-gray-600'>New York, NYC</Text>
          </View>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className='p-3 rounded-full bg-gray-300'>
          <Icon.Sliders width='20' height='20' strokeWidth={2.5} stroke='white' />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <Categories />
      </ScrollView>
    </SafeAreaView>
  );
}
