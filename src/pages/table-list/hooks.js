import { useEffect, useState } from "react"
// import { getApartments } from "../../api/Apartments";
import { getBuildings } from "../../api/Buildings";
import { getUsers } from '../../api/Accounts'
import {getFlats} from '../../api/Flats'
import { getContracts } from '../../api/Contracts'
import { createRenter, getRenters } from '../../api/Renters'

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then((result) => {
            const data = result.map((user) => ({
                ...user,
                userName: user.username,
                id: user.AccountId,
                RoleId: user.Role.RoleId,
            }));
            setUsers(data);
        })

    }, [])
    return users;
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
    useEffect(()=>{
        getBuildings().then((result)=>{
            const data = result.map((building)=>({
                ...building,
                id: building.BuildingId,
            }));
            setBuildings(data);
        });
    },[]);
    return buildings;
}

export const useFlats = () => {
    const [flats, setFlats] = useState([]);
    useEffect(() => {
        getFlats().then((result) => {
            const data = result?.map((flat) => ({
                ...flat,
                id: flat.FlatId,
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
            const data = result?.map((renter) => {
                return {
                    ...renter,
                    id: renter.RenterId,
                    BirthDate: new Date(renter.BirthDate).toLocaleDateString()
                }
            });
            setRenters(data);
        });
    }, []);
    const onAddRenter = (renter) => {
        createRenter(renter);
    }
    return {
        data: renters,
        onAddRenter,
    };
}
