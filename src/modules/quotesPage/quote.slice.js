import { createSlice } from "@reduxjs/toolkit";
import service from "./serviceApi";
import { actionStructre, serializeError } from "../../utils";

export const quoteSlice = createSlice({
	name: "quote",
	initialState: {
		loading: false,
		error: null,
		success: null,
		addOnList: null,
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
		addOnList: (state, { payload }) => {
			state.login = payload;
		},
	},
});

export const { loading, success, error, clear, addOnList } = quoteSlice.actions;

export const AddOnList = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, addOnList, error, service.addOnList, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default quoteSlice.reducer;
