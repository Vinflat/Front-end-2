
import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getUsers(){
    const url = `${BASE_URL}/accounts`;
    const user = getJSON(url).then((result) => result.resultList.$values);
    return user;
}