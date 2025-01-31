import {SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyles';
import homeStyles from './homeStyle';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.centerContent,
      ]}>
      <Text style={homeStyles.title}>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
