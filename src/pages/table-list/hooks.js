import { useEffect, useState } from "react"
import { getApartments } from "../../api/Apartments";
import { getBuildings } from "../../api/Buildings";
import { getUsers } from '../../api/Accounts'

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then((result) => {
            const data = result.map((user) => ({
                ...user,
                userName: user.username,
                id: user.$id,
            }));
            setUsers(data);
        })

    }, [])
    return users;
}

export const useApartment = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        getApartments().then((result) => {
            const data = result.map((apartment) => ({
                ...apartment,
                id: apartment.$id,
            }));
            setApartments(data);
        })

    }, [])
    return apartments;
}

export const useBuilding = () => {
    const [buildings, setBuildings] = useState([]);
    useEffect(()=>{
        getBuildings().then((result)=>{
            const data = result.map((building)=>({
                ...building,
                id: building.buildingId,
            }));
            setBuildings(data);
        });
    },[]);
    return buildings;
}