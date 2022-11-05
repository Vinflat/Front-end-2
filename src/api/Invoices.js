import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

//TODO check this endpoint, currently: no invoices available
export async function getInvoices() {
    const url = `${BASE_URL}/invoices`;
    const invoces = getJSON(url).then(result => result.$values);
    return invoces;
}
//TODO check this endpoint, currently: no invoice available
export async function getInvoicesByInvoiceId(invoiceId) {
    const url = `${BASE_URL}/invoices/${invoiceId}`;
    const invoice = getJSON(url).then(result => result);
    return invoice;
}
//TODO check this endpoint, currently: no invoice history available
export async function getInvoiceHistoryList() {
    const url = `${BASE_URL}/invoices/history`;
    const invoceHistories = getJSON(url).then(result => result.$values);
    return invoceHistories;
}
//TODO check this endpoint, currently: no invoices available
//TODO id is ID of invoice or invoice history?
export async function getInvoiceHistoryById(id) {
    const url = `${BASE_URL}/invoices/history/${id}`;
    const invoiceHistory = getJSON(url).then(result => result);
    return invoiceHistory;
}