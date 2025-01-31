import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyles';
import homeStyles from '../Home/homeStyle';

const AboutScreen = () => {
  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.centerContent,
      ]}>
      <Text style={homeStyles.title}>About Screen</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;
