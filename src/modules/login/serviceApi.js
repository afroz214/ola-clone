import HttpClient from "api/httpClient";

export const loginApi = (data) =>
	HttpClient("/userLogin", { method: "POST", data });
