import { BASE_URL } from "./Const";
import { getJSON } from "./Network";
//TODO check the result: currently it returns 404 No Bill Available
export async function getBills() {
    const url = `${BASE_URL}/bills`;
    const bills = getJSON(url).then(result => result.$values);
    return bills;
}

export async function getBillById(id){
    const url = `${BASE_URL}/bills/${id}`;
    const bill = getJSON(url).then(result => result);
    return bill;
}

export async function getBillsByRenterId(renterId){
    const url = `${BASE_URL}/bills/renter/${renterId}`;
    const bill = getJSON(url).then(result => result);
    return bill;
}

export async function getBillOfUser(userId){
    const url = `${BASE_URL}/bills/user/${userId}`;
    const bill = getJSON(url).then(result => result);
    return bill;
}

export async function getBillDetailList(){
    const url = `${BASE_URL}/bills/details`;
    const billDetailList = getJSON(url).then(result => result.$values);
    return billDetailList;
}

export async function getBillDetailById(id){
    const url = `${BASE_URL}/bills/${id}/details`;
    const bill = getJSON(url).then(result => result);
    return bill;
}