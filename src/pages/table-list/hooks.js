import { useEffect, useState } from "react"
// import { getApartments } from "../../api/Apartments";
import { createBuildingApi, getBuildings } from "../../api/Buildings";
import { getUsers } from '../../api/Accounts'
import { getFlats } from '../../api/Flats'
import { getContracts } from '../../api/Contracts'
import { getRenters } from '../../api/Renters'
import { getAreas } from "../../api/Areas"

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
export const useAreas = () => {
    const [areas, setAreas] = useState([]);
    useEffect(() => {
        getAreas().then((result) => {
            setAreas(result?.resultList);
        })

    }, [])
    return areas;
}

// export const useApartment = () => {
//     const [apartments, setApartments] = useState([]);
//     useEffect(() => {
//         getApartments().then((result) => {
//             const data = result.map((apartment) => ({
//                 ...apartment,
//                 id: apartment.$id,
//             }));
//             setApartments(data);
//         })

//     }, [])
//     return apartments;
// }

export const useBuildings = () => {
    const [buildings, setBuildings] = useState([]);
    const [error, setError] = useState(null)
    useEffect(() => {
        getBuildings().then((result) => {
            const data = result.map((building) => ({
                ...building,
                id: building.BuildingId,
            }));
            setBuildings(data);
        });
    }, []);
    const createBuilding = async (building) => {
        try {
            await createBuildingApi(building);
        } catch (err) {
            setError(err)
        }
        getBuildings().then((result) => {
            const data = result.map((building) => ({
                ...building,
                id: building.buildingId,
            }));
            setBuildings(data);
        });
    }
    return [buildings, createBuilding, error];
}

export const useFlats = () => {
    const [flats, setFlats] = useState([]);
    useEffect(() => {
        getFlats().then((result) => {
            const data = result?.map((flat) => ({
                ...flat,
                id: flat.flatId,
            }));
            setFlats(data);
        });
    }, []);
    return flats;
}

export const useContracts = () => {
    const [contracts, setContracts] = useState([]);
    useEffect(() => {
        getContracts().then((result) => {
            const data = result?.map((contract) => ({
                ...contract,
                id: contract.contractId,
            }));
            setContracts(data);
        });
    }, []);
    return contracts;
}

export const useRenters = () => {
    const [renters, setRenters] = useState([]);
    useEffect(() => {
        getRenters().then((result) => {
            const data = result?.map((renter) => ({
                ...renter,
                id: renter.renterId,
            }));
            setRenters(data);
        });
    }, []);
    return renters;
}

