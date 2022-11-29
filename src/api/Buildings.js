import { BASE_URL } from "./Const";
import { getJSON, postForm, postJSON, putJSON } from "../services/Network";

export async function getBuildings() {
  const url = `${BASE_URL}/buildings?PageNumber=1&PageSize=1000`;
  const buildings = getJSON(url).then((result) => result.resultList);
  return buildings;
}

export async function getBuildingById(id) {
  const url = `${BASE_URL}/buildings/${id}`;
  const building = getJSON(url).then((result) => result);
  return building;
}

export async function createBuildingApi(building) {
  const url = `${BASE_URL}/buildings`;
  const createdBuilding = postForm(url, building).then((result) => result);
  return createdBuilding;
}

export async function createBuildingJsonApi(building) {
  const url = `${BASE_URL}/buildings`;
  const createdBuilding = postJSON(url, building).then((result) => result);
  return createdBuilding;
}

export async function updateBuildingJsonApi(building) {
  const url = `${BASE_URL}/buildings/${building.BuildingId}`;
  const updateBuilding = putJSON(url, building).then((result) => result);
  return updateBuilding;
}
