import { createSlice } from "@reduxjs/toolkit";
import service from "./serviceApi";
import { actionStructre, serializeError } from "../../utils";

export const loginSlice = createSlice({
	name: "login",
	initialState: {
		loading: false,
		error: null,
		success: null,
		login: null,
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
		login: (state, { payload }) => {
			state.login = payload;
		},
	},
});

export const { loading, success, error, clear, login } = loginSlice.actions;

export const Login = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, login, error, service.login, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default loginSlice.reducer;
