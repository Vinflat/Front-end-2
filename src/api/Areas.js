import { BASE_URL } from "./Const";
import { getJSON } from "./Network";
export async function getAreas() {
    const url = `${BASE_URL}/areas`;
    const areas = getJSON(url).then(result => result.$values);
    return areas;
}

export async function getAreaById(areaId){
    const url = `${BASE_URL}/areas/${areaId}`;
    const area = getJSON(url).then(result => result);
    return area;
}