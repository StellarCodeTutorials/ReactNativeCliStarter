import {Button, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {resetToInitialState} from '../../redux/slices/onboardingSlice';
import {useDispatch} from 'react-redux';

const Onboard = ({navigation, onClick}: any) => {
  const dispatch = useDispatch();

  const Square = ({isLight, selected}: any) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#fff' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };

  const backgroundColor = (isLight: any) => (isLight ? 'blue' : 'lightblue');
  const color = (isLight: any) => backgroundColor(!isLight);

  const Done = ({isLight, ...props}: any) => (
    <Button
      title={'Done'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{color: color(isLight)}}
      {...props}
    />
  );

  const Skip = ({isLight, skipLabel, ...props}: any) => (
    <Button
      title={'Skip'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
      }}
      textStyle={{color: color(isLight)}}
      {...props}>
      {skipLabel}
    </Button>
  );

  const Next = ({isLight, ...props}: any) => (
    <Button
      title={'Next'}
      buttonStyle={{
        backgroundColor: backgroundColor(isLight),
      }}
      containerViewStyle={{
        marginVertical: 10,
        width: 70,
        backgroundColor: backgroundColor(isLight),
      }}
      textStyle={{color: color(isLight)}}
      {...props}
    />
  );

  return (
    <Onboarding
      // NextButtonComponent={Next}
      // SkipButtonComponent={Skip}
      // DoneButtonComponent={Done}
      onDone={() => {
        // dispatch(resetToInitialState())
        onClick();
      }}
      onSkip={() => {
        // dispatch(resetToInitialState())
        onClick();
      }}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../../assets/images/default_profile.png')}
            />
          ),
          title: 'Hey!',
          subtitle: 'Welcome to React Native CLI App!',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../../assets/images/default_profile.png')}
            />
          ),
          title: 'Awesome Apps',
          subtitle: 'You can create awesome apps here!',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../../assets/images/default_profile.png')}
            />
          ),
          title: 'Get Notified',
          subtitle:
            'We will send you notification as soon as something happened',
        },
      ]}
    />
  );
};

export default Onboard;

const styles = StyleSheet.create({});
