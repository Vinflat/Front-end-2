import { BASE_URL } from "./Const";
import { getJSON } from "./Network";
//TODO this endpoint doen't have response
export async function getPayments() {
    const url = `${BASE_URL}/payments`;
    const payments = getJSON(url).then(result => result.$values);
    return payments;
}



export async function getPaymentByPaymentId(paymentId) {
    const url = `${BASE_URL}/payments/${paymentId}`;
    const payment = getJSON(url).then(result => result);
    return payment;
}

export async function getPaymentTypeList() {
    const url = `${BASE_URL}/payments/type`;
    const paymentTypeList = getJSON(url).then(result => result.$values);
    return paymentTypeList;
}

export async function getPaymentTypeByPaymentTypeId(paymentTypeId) {
    const url = `${BASE_URL}/payments/type/${paymentTypeId}`;
    const paymentType = getJSON(url).then(result => result);
    return paymentType;
}
