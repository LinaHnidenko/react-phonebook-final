import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from 'redux/contacts/initialState';
import {
  handleFulfilled,
  handleFulfilledCreate,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from 'redux/helpers/helpers';
import {
  createContacts,
  deleteContacts,
  getContacts,
} from 'redux/operations/operations';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
export const arrayThunk = [createContacts, deleteContacts, getContacts];

export const thunkStatus = type => arrayThunk.map(el => el[type]);

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(getContacts.fulfilled, handleFulfilledGet)
      .addCase(createContacts.fulfilled, handleFulfilledCreate)
      .addCase(deleteContacts.fulfilled, handleFulfilledDelete)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.PENDING)), handlePending)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...thunkStatus(STATUS.REJECTED)), handleRejected);
  },
});

export const contactsReducer = contactSlice.reducer;

export const { setFilter } = contactSlice.actions;
