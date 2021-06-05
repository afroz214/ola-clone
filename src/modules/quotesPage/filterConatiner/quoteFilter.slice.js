import { createSlice } from "@reduxjs/toolkit";
import service from "./serviceApi";
import { actionStructre, serializeError } from "utils";

export const quoteFilterSlice = createSlice({
	name: "quoteFilter",
	initialState: {
		loading: false,
		error: null,
		success: null,
		ncbList: [],
		tempData: {},
		saveQuote: null,
	},
	reducers: {
		loading: (state) => {
			state.loading = true;
			state.error = null;
			state.success = null;
		},
		success: (state, { payload }) => {
			state.loading = null;
			state.error = null;
			state.success = payload;
		},
		error: (state, { payload }) => {
			state.loading = null;
			state.error = serializeError(payload);
			state.success = payload;
		},
		clear: (state, { payload }) => {
			state.loading = null;
			state.error = null;
			state.success = null;
		},
		ncbList: (state, { payload }) => {
			state.ncbList = payload;
		},

		setTempData: (state, { payload }) => {
			state.tempData = { ...state.tempData, ...payload };
		},

		saveQuoteData: (state, { payload }) => {
			state.saveQuote = payload;
		},
	},
});

export const {
	loading,
	success,
	error,
	clear,
	ncbList,
	setTempData,
	saveQuoteData,
} = quoteFilterSlice.actions;

export const NcbList = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, ncbList, error, service.ncbList, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export const SaveQuoteData = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, saveQuoteData, error, service.saveQuote, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default quoteFilterSlice.reducer;
