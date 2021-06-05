import HttpClient from "api/httpClient";

//journey-type
const type = (data) => HttpClient("/getOwnerTypes", { method: "POST", data });

//vehicle type
const vehicleType = (data) => HttpClient("/getVehicleType", { method: "POST", data });

//brand type
const brandType = (data) => HttpClient("/getManufacturer", { method: "POST", data });

//model type
const modelType = (data) => HttpClient("/getModelVersion", { method: "POST", data });

//RTO
const rto = (data) => HttpClient("/getRto", { method: "POST", data });

export default {
	type,
	vehicleType,
    brandType,
    modelType,
    rto
};
