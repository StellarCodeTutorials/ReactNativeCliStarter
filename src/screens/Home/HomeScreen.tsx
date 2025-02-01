import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import globalStyle from '../../assets/styles/globalStyles';
import homeStyles from './homeStyle';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {postSlice} from '../../redux/slices/exampleSlice';

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, loading, error} = useSelector(
    (state: RootState) => state.example,
  );
  console.log('loading, error, data', loading, error, data);

  const handleAddPost = () => {
    const newPost = {id: Date.now(), title: 'New Post'};
    dispatch(postSlice.postData(newPost));
  };

  const handleUpdatePost = (id: number) => {
    const updatedPost = {id, title: 'Updated Post'};
    dispatch(postSlice.updateData(id, updatedPost));
  };

  const handleDeletePost = (id: number) => {
    dispatch(postSlice.deleteData(id));
  };

  useEffect(() => {
    dispatch(postSlice.fetchData());
  }, [dispatch]);

  return (
    <SafeAreaView
      style={[
        globalStyle.backgroundWhite,
        globalStyle.flex,
        globalStyle.centerContent,
      ]}>
      <Text style={homeStyles.title}>Home Screen</Text>

      <Pressable onPress={handleAddPost}>
        <View>
          <Text>Add Post</Text>
        </View>
      </Pressable>

      <View style={homeStyles.container}>
        {loading && <Text style={homeStyles.title}>Loading...</Text>}
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Pressable onPress={() => handleUpdatePost(item.id)}>
              <View style={homeStyles.item}>
                <Text style={homeStyles.title}>{item.title}</Text>
              </View>
              <Pressable onPress={() => handleDeletePost(item.id)}>
                <View>
                  <Text>Delete Post</Text>
                </View>
              </Pressable>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
