import {StyleSheet, Dimensions} from 'react-native'
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width / 5;

export default StyleSheet.create({

    ViewStyle:{
      top:150,
      margin:50,
      borderRadius: 25,
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 250,
      backgroundColor: 'black',
    },
    Activityindicatorstyle: {

    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,

    }
});
