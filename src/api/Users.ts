
import { BASE_URL } from "./Const.ts";
import { getJSON } from "./Network.ts";

export async function getUsers(){
    const url = `${BASE_URL}/accounts`;
    const user = getJSON(url).then((result) => result.resultList.$values);
    return user;
}