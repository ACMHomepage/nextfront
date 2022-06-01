import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import * as localStorage from 'src/utils/localStorage';

import type { State, UserData } from './commons/types';
import { STORE_KEY, SLICE_NAME } from './commons/constants';

const getInitState = (): State => {
  const logged = !!localStorage.getItem(STORE_KEY.logged);
  return { logged, withInfo: false };
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState: getInitState(),
  reducers: {
    signOut: (state: State) => {
      localStorage.removeItem(STORE_KEY.logged);
      return { logged: false, withInfo: false } as State;
    },
    signIn: (state: State, actions: PayloadAction<UserData>) => {
      localStorage.setItem(STORE_KEY.logged, 'true');
      return {
        logged: true,
        withInfo: true,
        data: actions.payload,
      } as State;
    }
  }
});

export const {
  signOut,
  signIn,
} = slice.actions;

export default slice.reducer;