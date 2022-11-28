
import { BASE_URL } from "./Const";
import { getJSON, postJSON, putJSON, deleteJSON } from "../services/Network";

export async function getUsers(){
    const url = `${BASE_URL}/accounts`;
    const accounts = getJSON(url).then((result) => result.resultList);
    //cần có bear token để có thể sử dụng @@
    return accounts;
}

export async function getAccountbyId(id){
    const url = `${BASE_URL}/accounts/${id}`;
    const account = getJSON(url).then((response) => response);
    return account;
}


export async function createAccount(account){
    const url = `${BASE_URL}/accounts/register`;
    return await postJSON(url, {...account})
}

export async function updateAccount(account){
    const url = `${BASE_URL}/accounts/${account.AccountId}`;
    return await putJSON(url, account)
}

export async function deleteAccount(account){
    const url = `${BASE_URL}/accounts/${account.AccountId}`;
    return await deleteJSON(url, account)
}