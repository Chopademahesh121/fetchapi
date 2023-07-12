import { useEffect } from "react";
import { useState } from "react";



const Api = () => {

    const [users, setusers] = useState([])

    useEffect(()=>{
        async function Apidata () {
            const response = await fetch("https://reqres.in/api/users")
            console.log(response)
            const result = await response.json();
            console.log(result.data)
            setusers(result.data)
        }
       Apidata();
    },[])


    return(
        <>
            <h1>I am Api comp</h1>
            {
                users.map(u=>{
                    return(
                        <h2>Firstname : {u.first_name}</h2>
                    )
                })
            }
        </>
    )
} 

export default Api;