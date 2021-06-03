import { createSlice } from "@reduxjs/toolkit";
import service from "./serviceApi";
import { actionStructre, serializeError } from "utils";

export const homeSlice = createSlice({
	name: "home",
	initialState: {
		loading: false,
		error: null,
		success: null,
        type: [],
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
		type: (state, { payload }) => {
			state.type = payload;
		},
	},
});

export const { loading, success, error, clear, type } = homeSlice.actions;

export const Type = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, type, error, service.type, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default homeSlice.reducer;
