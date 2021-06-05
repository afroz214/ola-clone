import HttpClient from "api/httpClient";

const addOnList = (data) =>
	HttpClient("/getAddonList", { method: "POST", data });

export default {
	addOnList,
};
