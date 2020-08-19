import axios from "axios";

let DS_WEBSERVICES;

DS_WEBSERVICES = "https://ws-ocmweb-2174-for-click4offer.dev.dengisrazy.ru/";

export function apiGetRregion() {
    return axios.post(DS_WEBSERVICES + "click2offer/region/search");
}

export function apiGetCity(data) {
    return axios.post(DS_WEBSERVICES + "click2offer/city/search", data);
}

export function apiGetDepartment(data) {
    return axios.post(DS_WEBSERVICES + "click2offer/department/search", data);
}