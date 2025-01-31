import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const homeStyles = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter', '800'),
    fontSize: scaleFontSize(24),
  },
  container: {flex: 1, padding: 10},
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  error: {color: 'red', textAlign: 'center', marginTop: 20},
});

export default homeStyles;
