import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654bdb6b5b38a59f28efd01f.mockapi.io';

export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContacts = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', {
        name: user.name,
        phone: user.phone,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
