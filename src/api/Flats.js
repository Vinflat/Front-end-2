import { BASE_URL } from "./Const";
import { getJSON, postJSON, putJSON, deleteJSON } from "../services/Network";


// export async function getFlats({name, description, status, flatType, buildingId, pageNumber, pageSize}) {
export async function getFlats() {
    const url = `${BASE_URL}/flats`;
    const flats = getJSON(url).then(result => result.resultList);
    return flats;
}

export async function getFlatById(flatId) {
    const url = `${BASE_URL}/flats/${flatId}`;
    const flat = getJSON(url).then(result => result);
    return flat;
}

export async function getFlatTypes() {
    const url = `${BASE_URL}/flats/type`;
    const flatTypes = getJSON(url).then(result => result.$values);
    return flatTypes;
}

export async function getFlatTypeByFlatTypeId(flatTypeId) {
    const url = `${BASE_URL}/flats/type/${flatTypeId}`;
    const flatType = getJSON(url).then(result => result);
    return flatType;
}

export async function createFlat(flat) {
    const url = `${BASE_URL}/flats`;
    return await postJSON(url, flat).then(result => result);
}

export async function updateFlat(flat) {
    const url = `${BASE_URL}/flats/${flat.FlatId}`;
    return await putJSON(url, flat).then(result => result);
}

export async function deleteFlat(id) {
    const url = `${BASE_URL}/flats/${id}`;
    return await deleteJSON(url).then(result => result);
}

export async function createFlatType(type) {
    const url = `${BASE_URL}/flats/type`;
    return await postJSON(url, type).then(result => result);
}

export async function updateFlatType(flat) {
    const url = `${BASE_URL}/flats/type/${flat.FlatId}`;
    return await putJSON(url, flat).then(result => result);
}

export async function deleteFlatType(id) {
    const url = `${BASE_URL}/flats/type/${id}`;
    return await deleteJSON(url).then(result => result);
}

