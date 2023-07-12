
import { useEffect, useState } from "react";

const Fetchapi = () => {

    const [users, setusers] = useState([])

    useEffect(() => {

        async function Apidata() {
            const response = await fetch("https://reqres.in/api/users");
            console.log(response)

            const result = await response.json();
            console.log(result.data)

            setusers(result.data)
        }

        Apidata();
    }, [])



    return (
        <>

            <h2>Hello, I am a fetchapi component</h2>

            {
                users.map(user => {
                    return (
                        /*  <h2>id:{user.id}& Firstname:{user.first_name}</h2>
  */
                        <h2 key={user.id}>

                            Id: {user.id}<br />
                            Avatar:<img src={user.Avatar} alt="employee" /><br />
                            Firstname:{user.first_name}<br />
                            last_name:{user.last_name}<br />
                            Email:{user.email}

                        </h2>

                    )
                })


            }

        </>
    );
}

export default Fetchapi;