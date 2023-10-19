import { useEffect, useState } from 'react';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Users = () => {


    // function to submit the new user
    const submitHandler = (e) => {
        e.preventDefault();      
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // validation for username to check minimum 3 characters must be there
        if(input.username.length < 3){
            return alert("Please enter minimum 3 characters ")
        }

        // validation for email although default validation is working with this.
        if(!emailPattern.test(input.email)){          
            return alert("Please enter valid email")
        }

        let allUsers = [...users, input]
        setUsers(allUsers)
        setInput({
            userid : "",
            username : "",
            email : ""
            
        })

    }

    // funciton to set input values 
    const inputHandler = (e) => {
        let name = e.target.name; 
        let value = e.target.value;

            // validation for user id to take positive integers only.
            if(name === "userid" && value < 0){
                 return alert("Please enter Positive Integer")
            }
            
            
             setInput({...input, [name] : value})
    }

    
    const [input, setInput] = useState({
            userid : "",
            username : "",
            email : ""
            
    })
    const[users, setUsers] = useState([]);

    // set item in local storage
    useEffect (() => {
        localStorage.setItem('user',JSON.stringify(users))
    },[users])


    return(
        <>
        <div className='users'>
            <h6>Add New User</h6>
            <form onSubmit={(e)=>submitHandler(e)} className='formMain'>
                <div className='mb-3'>
                    <input type="number" name="userid" value={input.userid} onChange={inputHandler} placeholder='Enter User ID'/>
                </div>
                <div className='mb-3'>
                    <input type="text" name="username" value={input.username} onChange={inputHandler} placeholder='Enter Your Name'/>
                </div>
                <div className='mb-3'>
                    <input type="email" name="email" value={input.email} onChange={inputHandler} placeholder='Enter email'/>
                </div>
                           
                
                <input type="submit"/>
         </form>
         </div>
        </>
    )
}

export default Users