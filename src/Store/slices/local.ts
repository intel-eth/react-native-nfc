import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface LocalState {
  isLogin?: boolean;
}

const initialState: LocalState = {
  isLogin: false,
};

const localSlice = createSlice({
  name: 'local',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<LocalState['isLogin']>) => {
      state.isLogin = action.payload;
    },
    userLogout: state => {
      state.isLogin = false;
    },
  },
});

export const {setIsLogin, userLogout} = localSlice.actions;

export default localSlice;
