import { createSlice } from "@reduxjs/toolkit";
import service from "./serviceApi";
import { actionStructre, serializeError } from "utils";

export const homeSlice = createSlice({
	name: "home",
	initialState: {
		loading: false,
		error: null,
		success: null,
		enquiry_id: null,
		type: [],
		vehicleType: [],
		brandType: [],
		modelType: [],
		temp_data: {},
		rto: [],
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
			switch (payload) {
				case "enquiry_id":
					state.enquiry_id = null;
					break;
				default:
					break;
			}
		},
		enquiry_id: (state, { payload }) => {
			state.enquiry_id = payload;
		},
		type: (state, { payload }) => {
			state.type = payload;
		},
		vehicleType: (state, { payload }) => {
			state.vehicleType = payload;
		},
		brandType: (state, { payload }) => {
			state.brandType = payload;
		},
		modelType: (state, { payload }) => {
			state.modelType = payload;
		},
		set_temp_data: (state, { payload }) => {
			state.temp_data = { ...state.temp_data, ...payload };
		},
		rto: (state, { payload }) => {
			state.rto = payload;
		},
	},
});

export const {
	loading,
	success,
	error,
	clear,
	type,
	vehicleType,
	brandType,
	modelType,
	set_temp_data,
	rto,
	enquiry_id,
} = homeSlice.actions;

export const Enquiry = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, enquiry_id, error, service.enquiry, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

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

export const VehicleType = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, vehicleType, error, service.vehicleType, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export const BrandType = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, brandType, error, service.brandType, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export const ModelType = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, modelType, error, service.modelType, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export const Rto = (data) => {
	return async (dispatch) => {
		try {
			actionStructre(dispatch, rto, error, service.rto, data);
		} catch (err) {
			dispatch(error("Something went wrong"));
			console.error("Error", err);
		}
	};
};

export default homeSlice.reducer;
