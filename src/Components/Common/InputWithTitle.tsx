import {Text, theme} from '@/Theme/Theme';
import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import SVG from '@/Utils/Assets/Svg';

interface IInputWithTitleProps extends TextInputProps {
  // Additional props specific to CustomInput
  onChangeText?: any;
  onBlur?: any;
  title?: string;
  placeholder?: string;
  withoutStar?: boolean;
  isPasswordField?: boolean;
  customProp?: string;
  inputBoxStyle?: ViewStyle | TextInputProps;
  value?: any;
}

interface IErrorTextMessageProps {
  errorMessage?: string;
}
export function InputWithTitle({
  onChangeText,
  onBlur,
  title,
  placeholder,
  withoutStar,
  isPasswordField,
  customProp,
  inputBoxStyle,
  value,
  ...restProps
}: IInputWithTitleProps) {
  const [isShowPassword, setIsShowPassword] = useState(true);

  return (
    <>
      {title && (
        <Text
          variant="plus_jakarta_sans_regular_14"
          fontWeight="500"
          color="white"
          letterSpacing={0.3}
          style={styles.heading}>
          {title}
          {withoutStar ? null : (
            <Text
              variant="plus_jakarta_sans_regular_14"
              color="white"
              style={styles.heading}>
              *
            </Text>
          )}
        </Text>
      )}

      {!isPasswordField ? (
        <TextInput
          value={value}
          style={[styles.inputBox, {...inputBoxStyle}]}
          placeholder={placeholder ? placeholder : title}
          placeholderTextColor={theme.colors.placeHolder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          {...restProps}
        />
      ) : (
        <View style={styles.eyeinput}>
          <TextInput
            value={value}
            placeholder={placeholder ? placeholder : title}
            style={styles.eye}
            secureTextEntry={isShowPassword ? true : false}
            placeholderTextColor={theme.colors.placeHolder}
            onChangeText={onChangeText}
            onBlur={onBlur}
            {...restProps}
          />
          <Pressable
            onPress={() => {
              setIsShowPassword(!isShowPassword);
            }}>
            {/* <SVG.EYE /> */}
          </Pressable>
        </View>
      )}
    </>
  );
}

export function ErrorTextMessage({errorMessage}: IErrorTextMessageProps) {
  return (
    <>
      <Text fontSize={12} mt="10" variant="plus_jakarta_sans_semibold_14" color="error">
        {errorMessage as string}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.white},
  alignStyle: {alignSelf: 'center'},
  heading: {
    marginBottom: 10,
  },
  inputBox: {
    width: '100%',
    height: 52,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: '5%',
    fontSize: 14,
    color: theme.colors.white,
    backgroundColor:theme.colors.dark_jungle_green
  },
  eyeinput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    height: 52,
    borderRadius: 8,
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  eye: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    width: '80%',
    height: '100%',
    color: theme.colors.blackBG,
  },
});
