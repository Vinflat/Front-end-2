import { useEffect, useState } from "react"
import { getUsers } from '../../api/Users'

export const useUsers = () =>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then((result) => {       
            const data = result.map((user) => ({
                ...user,
                userName: user.username,
                id: user.$id,
            }));
            setUsers(data);
        })

    },[])
    return users;
}
