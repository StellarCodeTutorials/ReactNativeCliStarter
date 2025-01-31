import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { scaleFontSize } from "../../assets/styles/scaling";

const homeStyles = StyleSheet.create({
    title: {
        fontFamily: getFontFamily('Inter', '800'),
        fontSize: scaleFontSize(24)
    }
});

export default homeStyles;