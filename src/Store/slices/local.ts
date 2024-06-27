import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LocalState {
  isLogin?: boolean;
  isAddNFCSuccess?: boolean;
  isRemoveFirst?: boolean;
}

const initialState: LocalState = {
  isLogin: false,
  isAddNFCSuccess: false,
  isRemoveFirst: false,
};

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<LocalState['isLogin']>) => {
      state.isLogin = action.payload;
    },
    setIsAddNFCSuccess: (
      state,
      action: PayloadAction<LocalState['isAddNFCSuccess']>,
    ) => {
      state.isAddNFCSuccess = action.payload;
    },
    setIsRemoveFirst: (
      state,
      action: PayloadAction<LocalState['isRemoveFirst']>,
    ) => {
      state.isRemoveFirst = action.payload;
    },
    userLogout: state => {
      state.isLogin = false;
      state.isAddNFCSuccess = false;
      state.isRemoveFirst = false;
    },
  },
});

export const {setIsLogin, setIsRemoveFirst, setIsAddNFCSuccess, userLogout} =
  localSlice.actions;

export default localSlice;
