import { combineReducers } from "redux";
import loginSlice from "modules/login/login.slice";
import homeSlice from "modules/Home/home.slice";

export default combineReducers({
	login: loginSlice,
	home: homeSlice,
});
