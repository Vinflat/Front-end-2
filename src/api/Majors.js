import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getMajors() {
    const url = `${BASE_URL}/majors`;
    const majors = getJSON(url).then(result => result.$values);
    return majors;
}

export async function getMajorByMajorId(majorId) {
    const url = `${BASE_URL}/majors/${majorId}`;
    const major = getJSON(url).then(result => result);
    return major;
}