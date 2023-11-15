export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleFulfilled = state => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

export const handleFulfilledGet = (state, action) => {
  state.contacts.items = action.payload;
};

export const handleFulfilledCreate = (state, action) => {
  state.contacts.items.push(action.payload);
};

export const handleFulfilledDelete = (state, action) => {
  state.contacts.items = state.contacts.items.filter(
    contact => contact.id !== action.payload.id
  );
};

export const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};
