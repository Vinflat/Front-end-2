import { BASE_URL } from "./Const";
import { getJSON, postJSON, putJSON} from "../services/Network";

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
    return await postJSON(url, renter)
}

export async function updateRenter(renter){
    const url = `${BASE_URL}/renters/${renter.RenterId}`;
    return await putJSON(url, renter)
}

