import {dynamicScale} from '@/Helper/ResponsiveFonts';
import {Text, theme} from '@/Theme/Theme';
import {color} from '@shopify/restyle';
import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
// import Lottie from 'lottie-react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Ripple from 'react-native-material-ripple';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: any;
  mt?: any;
  btnViewStyle?: ViewStyle;
  txtStyle?: TextStyle;
  isLoading?: boolean;
}

export function Button({
  title,
  onPress,
  mt,
  btnViewStyle,
  txtStyle,
  isLoading,
  ...rest
}: ButtonProps) {
  return (
    <Ripple
      rippleDuration={2000}
      rippleColor="#F4FFA2"
      rippleContainerBorderRadius={100}
      onPress={() => onPress()}
      style={[
        styles.buttonStyle,
        {
          marginTop: mt ? mt : 0,
        },
        {...btnViewStyle},
      ]}
      {...rest}>
      {/* {isLoading ? (
        <Lottie
          source={require('@/Assets/Json/loader.json')}
          autoPlay
          loop
          style={styles.animation}
        />
      ) : ( */}
      <Text
        variant="plus_jakarta_sans_semibold_18"
        fontWeight="600"
        lineHeight={22}
        color="onxy"
        letterSpacing={0.3}
        style={[{...txtStyle}]}>
        {title}
      </Text>
      {/* )} */}
    </Ripple>
  );
}

interface IGradientButtonProps {
  onPress?: any;
  text?: any;
  colors?: any;
  btnViewStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: dynamicScale(55),
    width: '90%',
    backgroundColor: theme.colors.pear,
    alignSelf: 'center',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderButtonStyle: {
    width: '90%',
    height: 48,
    backgroundColor: theme.colors.white,
    alignSelf: 'center',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1.5,
    // borderColor: theme.colors.mainFontColor,
  },
  animation: {
    height: 80,
    width: 80,
  },
});
