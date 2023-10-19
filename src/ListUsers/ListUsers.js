import { useEffect, useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListUsers = () => {
    const [stored, setStored] = useState([]); 

    // Using useEfect hook to get data from local storage
    useEffect(()=>{
        let storedUsers = localStorage.getItem('user')
        setStored(JSON.parse(storedUsers))
    },[])
    

    // Funciton to delete the user from local storage
    const deleteUser = (index) => {
        let users = [...stored]
        users.splice(index,1)
        setStored(users)
        localStorage.setItem('user',JSON.stringify(users))
    }
    return(
        <>
        <div className='listUsersMain'>
        <h6>Users List</h6>
        <table className='listTable'>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>User Name</th>
                    <th>User Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {stored?.map((item,index)=>
                    <tr key={`${index}${item.userid}`}>
                        <td>{item.userid}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td><button onClick={()=>deleteUser(index)}>Delete</button></td>
                    </tr>
                )}
            </tbody>
        </table>
        </div>
        
        </>
    )
}

export default ListUsers