import { useEffect, useState } from "react"
import { getUsers } from '../../api/Users.ts'
interface User {
    id: number;
    userName: string;
    phone: string;
}
export const useUsers = () =>{
    const [users, setUsers] = useState<User[]>();
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
    return users ?? [];
}
