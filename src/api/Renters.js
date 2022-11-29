import { BASE_URL } from "./Const";
import { getJSON, postForm, putForm, deleteJSON } from "../services/Network";

export async function getRenters() {
    const url = `${BASE_URL}/renters`;
    const renters = getJSON(url).then(result => result.resultList);
    return renters;
}

export async function getRenterByRenterId(renterId) {
    const url = `${BASE_URL}/renters/${renterId}`;
    const renter = getJSON(url).then(result => result);
    return renter;
}

export async function createRenter(renter){
    const url = `${BASE_URL}/renters`;
    return await postForm(url, renter)
}

export async function updateRenter(renter){
    const url = `${BASE_URL}/renters/${renter.RenterId}`;
    return await putForm(url, renter)
}

export async function deleteRenter(renter){
    const url = `${BASE_URL}/renters/${renter.RenterId}`;
    return await deleteJSON(url, renter)
}

