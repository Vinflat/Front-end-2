import { BASE_URL } from "./Const";
import { getJSON } from "../services/Network";


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

export async function getFlatTypeList() {
    const url = `${BASE_URL}/flats/type`;
    const flatTypes = getJSON(url).then(result => result.$values);
    return flatTypes;
}

export async function getFlatTypeByFlatTypeId(flatTypeId) {
    const url = `${BASE_URL}/flats/type/${flatTypeId}`;
    const flatType = getJSON(url).then(result => result);
    return flatType;
}
