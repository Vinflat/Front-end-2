import { BASE_URL } from "./Const";
import { getJSON } from "./Network";


export async function getInvoices() {
    const url = `${BASE_URL}/invoices`;
    const invoces = getJSON(url).then(result => result);
    return invoces;
}

export async function getInvoicesByInvoiceId(invoiceId) {
    const url = `${BASE_URL}/invoices/${invoiceId}`;
    const invoice = getJSON(url).then(result => result);
    return invoice;
}

export async function getInvoiceHistoryList() {
    const url = `${BASE_URL}/invoices/history`;
    const invoceHistories = getJSON(url).then(result => result.$values);
    return invoceHistories;
}

export async function getInvoiceHistoryById(id) {
    const url = `${BASE_URL}/invoices/history/${id}`;
    const invoiceHistory = getJSON(url).then(result => result);
    return invoiceHistory;
}