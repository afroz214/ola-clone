import HttpClient from "api/httpClient";

const ncbList = (data) => HttpClient("/getNcb", { method: "POST", data });

const saveQuote = (data) =>
	HttpClient("/saveQuoteData", { method: "POST", data });

export default {
	ncbList,
	saveQuote,
};
