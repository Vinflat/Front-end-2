import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getRenters() {
    const url = `${BASE_URL}/renters`;
    const renters = getJSON(url).then(result => result.$values);
    return renters;
}

export async function getRenterByRenterId(renterId) {
    const url = `${BASE_URL}/renters/${renterId}`;
    const renter = getJSON(url).then(result => result);
    return renter;
}