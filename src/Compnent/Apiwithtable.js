import { useEffect, useState } from "react";
const Apiwithtable = () => {
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
         return(
        <>
            <hr />
            <h2>Api Date With Table</h2>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>

                                    <td>{user.id}</td>
                                    <td><img src={user.avatar} alt="employee"></img></td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>

                                </tr>
                            )
                        })

                    }
                </tbody>

            </table>


        </>
    );
}
export default Apiwithtable;