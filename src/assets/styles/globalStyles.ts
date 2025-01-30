import { StyleSheet } from "react-native";
import { verticalScale } from "./scaling";

const globalStyle = StyleSheet.create({
    backgroundWhite: {
        backgroundColor: '#ffffff'
    },
    flex: {
        flex: 1
    },
    marginBottom24: {
       marginBottom: verticalScale(24) 
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default globalStyle;