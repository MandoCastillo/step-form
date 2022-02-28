/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

export interface UserFormState {
  currentPage: number;
  minPage: number;
  maxPage: number;
  isInFistPage: boolean;
  isInLastPage: boolean;
}

const initialState: UserFormState = {
  currentPage: 1,
  minPage: 1,
  maxPage: 5,
  isInFistPage: true,
  isInLastPage: false,
};

const checkLastAndFirstPage = (state: WritableDraft<UserFormState>) => {
  if (state.currentPage === state.maxPage) {
    state.isInLastPage = true;
  } else {
    state.isInLastPage = false;
  }

  if (state.currentPage === state.minPage) {
    state.isInFistPage = true;
  } else {
    state.isInFistPage = false;
  }
};

export const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    nextPage: (state) => {
      if (state.currentPage + 1 <= state.maxPage) {
        state.currentPage += 1;
      }
      checkLastAndFirstPage(state);
    },
    prevPage: (state) => {
      if (state.currentPage - 1 >= state.minPage) {
        state.currentPage -= 1;
      }
      checkLastAndFirstPage(state);
    },
  },
});

export const { nextPage, prevPage } = userFormSlice.actions;

export default userFormSlice.reducer;
