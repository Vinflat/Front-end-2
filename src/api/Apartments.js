
import { BASE_URL } from "./Const";
import { getJSON } from "./Network";

export async function getApartments({apartmentName, areaId, pageNumber, pageSize}){
    const url = `${BASE_URL}/apartments?Name=${apartmentName}&AreaId=${areaId}&PageNumber=${pageNumber}&PageSize=${pageSize}`;
    const apartments = getJSON(url).then((result) => result.$values);
    return apartments;
}

export async function getApartmentById(apartmentId){
    const url = `${BASE_URL}/apartments/${apartmentId}`;
    const apartment = getJSON(url).then((result) => result);
    return apartment;
}