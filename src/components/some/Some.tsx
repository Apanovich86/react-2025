import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.ts";

const Some = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams();
    useEffect(() => {
        //const pg = query.get('pg');
        getAllUsers(query.get('pg') || '1').then(value =>setUsers(value.data));
    }, [query]);
    return (
        <div>
            { users.map(value => <div key={value.id}>{value.first_name}</div>)}
        </div>
    );
};

export default Some;