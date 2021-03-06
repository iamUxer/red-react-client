import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

//REDUCER: switch문이 사라짐
export const groceriesSlice = createSlice({
  name: 'groceries',

  //초기값
  initialState: {
    groceries: [],
    grocery: {
      name: '',
      enter: '',
      expire: '',
    },
  },

  // 액션에 따라 api통신 후 돌려받은 데이터를 가공하여 스토어에 상태를 반영한다.
  // reducer map
  reducers: {
    // Reducer + Action 함수
    grocerySet: (state, action) => {
      state.grocery = action.payload;
    },
    groceriesCreate: (state, action) => {
      state.groceries.push({
        name: action.payload.name,
        enter: moment().format('YYYY-MM-DD'),
        expire: moment().add(2, 'weeks').format('YYYY-MM-DD'),
      });
    },
    groceriesRead: (state, action) => {
      state.groceries = action.payload;
    },
    groceriesDelete(state, action) {
      state.groceries.splice(action.payload, 1);
    },
    groceriesUpdate: (state, action) => {
      state.groceries[action.payload.index] = action.payload.grocery;
    },
  },
});

export const stateGroceries = (state) => state.groceries;
export const actionsGroceries = groceriesSlice.actions;

export default groceriesSlice.reducer;
