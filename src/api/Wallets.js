import { BASE_URL } from "./Const";
import { getJSON } from "./Network";
//TODO all endpoint in this file doesn't return value
export async function getWallets() {
    const url = `${BASE_URL}/wallets/wallets`;
    const wallets = getJSON(url).then(result => result.$values);
    return wallets;
}

export async function getWalletTypes() {
    const url = `${BASE_URL}/wallets/wallets/type`;
    const walletType = getJSON(url).then(result => result.$values);
    return walletType;
}

export async function getWalletByType(walletTypeId) {
    const url = `${BASE_URL}/wallets/wallet/type?walletType=${walletTypeId}`;
    const wallet = getJSON(url).then(result => result);
    return wallet;
}
//TODO can't try this endpoint in swagger
export async function getWalletById(walletId) {
    // const url = `${BASE_URL}/wallets/wallets`;
    // const wallets = getJSON(url).then(result => result.$values);
    // return wallets;
}