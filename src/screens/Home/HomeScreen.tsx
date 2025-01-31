import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import globalStyle from '../../assets/styles/globalStyles';
import homeStyles from './homeStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {fetchExampleData} from '../../redux/slices/exampleSlice';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, loading, error} = useSelector(
    (state: RootState) => state.example,
  );
  console.log('loading, error, data', loading, error, data);

  useEffect(() => {
    dispatch(fetchExampleData());
  }, [dispatch]);

  if (loading)
    return <ActivityIndicator size="large" style={homeStyles.centered} />;
  if (error) return <Text style={homeStyles.error}>Error: {error}</Text>;

  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.centerContent,
      ]}>
      <Text style={homeStyles.title}>Home Screen</Text>
      <View style={homeStyles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={homeStyles.item}>
              <Text style={homeStyles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
