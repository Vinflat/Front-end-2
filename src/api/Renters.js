import { BASE_URL } from "./Const";
import { getJSON, postJSON } from "../services/Network";

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
    console.log("renter", renter)
    return await postJSON(url, renter)
}