import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getUniversities() {
    const url = `${BASE_URL}/universities`;
    const universities = getJSON(url).then(result => result.$values);
    return universities;
}

export async function getUniversityById(universityId) {
    const url = `${BASE_URL}/universities/${universityId}`;
    const university = getJSON(url).then(result => result);
    return university;
}