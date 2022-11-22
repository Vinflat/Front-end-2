
import { BASE_URL } from "./Const";
import { getJSON, postJSON } from "../services/Network";

export async function getBuildings() {
    const url = `${BASE_URL}/buildings`;
    const buildings = getJSON(url).then((result) => result.$values);
    return buildings;
}

export async function getBuildingById(id) {
    const url = `${BASE_URL}/buildings/${id}`;
    const building = getJSON(url).then(result => result);
    return building;
}

export async function createBuildingApi(building) {
    const url = `${BASE_URL}/buildings`;
    const createdBuilding = postJSON(url, building).then(result => result);
    return createdBuilding;
}