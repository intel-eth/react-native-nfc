import React from 'react';
import {View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';

interface ModalBoxProps {
  modalVisible: boolean;
  onBackdropPress: any;
  children: any;
  modalStyle?: ViewStyle;
  rootViewStyle?: ViewStyle;
}

const ModalBox: React.FC<ModalBoxProps> = ({
  modalVisible,
  children,
  onBackdropPress,
  modalStyle,
  rootViewStyle,
}) => {
  return (
    <Modal
      animationIn={'slideInUp'}
      animationInTiming={1000}
      animationOutTiming={500}
      animationOut={'slideOutDown'}
      isVisible={modalVisible}
      presentationStyle="overFullScreen"
      backdropOpacity={0.7}
      style={[{...modalStyle}]}
      onBackdropPress={() => onBackdropPress()}>
      <View
        style={[
          {
            paddingVertical: 20,
            backgroundColor: 'white',
            borderRadius: 30,
          },
          {...rootViewStyle},
        ]}>
        <>{children}</>
      </View>
    </Modal>
  );
};

export default ModalBox;
