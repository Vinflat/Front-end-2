
import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getBuildings(){
    const url = `${BASE_URL}/buildings`;
    const buildings = getJSON(url).then((result) => result.$values);
    return buildings;
}

export async function getBuildingById(id){
    const url = `${BASE_URL}/buildings/${id}`;
    const building = getJSON(url).then(result => result);
    return building;
}