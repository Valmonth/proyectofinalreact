import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const PurchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases:(state, action) =>{
            const purchase = action.payload
            return purchase
           }
    }
})

export const getPurchasesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases', getConfig())
        .then(res => dispatch(setPurchases(res.data?.data?.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurchases } = PurchasesSlice.actions;

export default PurchasesSlice.reducer;
