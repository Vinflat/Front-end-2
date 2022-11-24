import { deleteJSON, postJSON, putJSON } from "../services/Network";
import { BASE_URL } from "./Const";
import { getJSON } from "../services/Network";
export async function getAreas() {
    const url = `${BASE_URL}/areas`;
    const areas = getJSON(url).then(result => result);
    return areas;
}

export async function getAreaById(areaId){
    const url = `${BASE_URL}/areas/${areaId}`;
    const area = getJSON(url).then(result => result);
    return area;
}

export async function updateArea(option){
    const url = `${BASE_URL}/areas/${option.areaId}`;
    const updatedArea = putJSON(url, option).then(result => result);
    return updatedArea;
}

export async function createArea(option){
    const url = `${BASE_URL}/areas`;
    const createdArea = postJSON(url, option).then(result => result);
    return createdArea;
}

export async function deleteArea(option){
    const url = `${BASE_URL}/areas/${option.areaId}`;
    const deletedArea = deleteJSON(url, option).then(result => result);
    return deletedArea;
}