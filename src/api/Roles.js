import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getRoles() {
    const url = `${BASE_URL}/roles`;
    const result = getJSON(url).then(result => result.$values);
    return result;
}

export async function getRoleByRoleId(roleId) {
    const url = `${BASE_URL}/roles/${roleId}`;
    const role = getJSON(url).then(result => result);
    return role;
}