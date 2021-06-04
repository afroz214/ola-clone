import HttpClient from "api/httpClient";

const ncbList = (data) => HttpClient("/getNcb", { method: "POST", data });

export default {
	ncbList,
};
