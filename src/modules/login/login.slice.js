import { createSlice } from "@reduxjs/toolkit";
import { loginApi } from "./serviceApi";
import { actionStructre, serializeError } from "../../utils";

export const loginSlice = createSlice({
	name: "login",
	initialState: {
		loading: false,
		error: null,
		success: null,
		login: null,
		corpId: null,
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
		setCorpId: (state, { payload }) => {
			state.corpId = payload;
		},
	},
});

export const { loading, success, error, clear, login, setCorpId } =
	loginSlice.actions;

export const Login = (data) => {
	return async (dispatch) => {
		try {
			const response = await loginApi(data);
			if (response?.data) {
				dispatch(login(response.data?.msg));
				dispatch(setCorpId(response.data?.corpId));
			}
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default loginSlice.reducer;
