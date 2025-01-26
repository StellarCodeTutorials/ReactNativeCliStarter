import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import globalStyle from '../../assets/styles/globalStyles';

const AboutScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Text>AboutScreen</Text>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
