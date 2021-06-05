import { combineReducers } from "redux";
import loginSlice from "modules/login/login.slice";
import homeSlice from "modules/Home/home.slice";
import quoteFilterSlice from "modules/quotesPage/filterConatiner/quoteFilter.slice";
import quoteSlice from "modules/quotesPage/quote.slice";
export default combineReducers({
	login: loginSlice,
	home: homeSlice,
	quoteFilter: quoteFilterSlice,
	quotes: quoteSlice,
});
