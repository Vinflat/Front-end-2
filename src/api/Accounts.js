
import { BASE_URL } from "./Const";
import { getJSON } from "../services/Network";

export async function getUsers(){
    const url = `${BASE_URL}/accounts`;
    const accounts = getJSON(url).then((result) => result.resultList.$values);
    //cần có bear token để có thể sử dụng @@
    return accounts;
}

export async function getAccountbyId(id){
    const url = `${BASE_URL}/accounts/${id}`;
    const account = getJSON(url).then((response) => response);
    return account;
}