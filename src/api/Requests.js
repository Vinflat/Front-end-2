import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getRequests() {
    const url = `${BASE_URL}/requests`;
    const requests = getJSON(url).then(result => result.$values);
    return requests;
}

export async function getRequestByRequestId(requestId) {
    const url = `${BASE_URL}/requests/${requestId}`;
    const request = getJSON(url).then(result => result);
    return request;
}

export async function getRequestList() {
    const url = `${BASE_URL}/requests/type`;
    const requestList = getJSON(url).then(result => result.$values);
    return requestList;
}
//TODO no response ==> check this endpoint again
export async function getRequestTypeByRequestTypeId(requestTypeId) {
    const url = `${BASE_URL}/requests/type/${requestTypeId}`;
    const requestType = getJSON(url).then(result => result);
    return requestType;
}