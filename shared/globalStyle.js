import { StyleSheet, Platform,StatusBar } from 'react-native';
import Constant from 'expo-constants'
export default StyleSheet.create({
    droidSafeArea: {
        //flex: 1,
        top: Platform.OS === 'android' ? 30:30//StatusBar.currentHeight : Constant.statusBarHeight

    },
});