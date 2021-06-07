import HttpClient from "api/httpClient";

//lead-page
const enquiry = (data) => HttpClient("/createEnquiryId", { method: "POST", data });

//journey-type
const type = (data) => HttpClient("/getOwnerTypes", { method: "POST", data });

//vehicle type
const vehicleType = (data) => HttpClient("/getVehicleCategory", { method: "POST", data });

//variant type
const variantType = (data) => HttpClient("/getModelVersion", { method: "POST", data });

//brand type
const brandType = (data) => HttpClient("/getManufacturer", { method: "POST", data });

//model type
const modelType = (data) => HttpClient("/getModel", { method: "POST", data });

//RTO
const rto = (data) => HttpClient("/getRto", { method: "POST", data });

export default {
    enquiry,
	type,
	vehicleType,
    brandType,
    modelType,
    rto,
    variantType,
};
