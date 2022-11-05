import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getServices() {
    const url = `${BASE_URL}/services`;
    const services = getJSON(url).then(result => result.$values);
    return services;
}

export async function getServiceByServiceId(serviceId) {
    const url = `${BASE_URL}/services/${serviceId}`;
    const service = getJSON(url).then(result => result);
    return service;
}

export async function getServiceTypeList() {
    const url = `${BASE_URL}/services/type`;
    const serviceTypeList = getJSON(url).then(result => result.$values);
    return serviceTypeList;
}

export async function getServiceTypeByServiceTypeId(serviceTypeId) {
    const url = `${BASE_URL}/services/type/${serviceTypeId}`;
    const serviceType = getJSON(url).then(result => result);
    return serviceType;
}