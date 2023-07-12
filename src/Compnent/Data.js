import { useState } from "react";

const Data = () => {

    const [name, setname] = useState("Mahesh G Chopade");
    const [id, setid] = useState("MS@121");
    const [password, setpassword] = useState("#########");
    const [dob, setdob] = useState("05/05/1995");
    const [gm, setgm] = useState("Genral Manager")
    const [shift, setshift] = useState("Morning");

    function pass() {
        setname("Kuldeep D. Raghuvanshi")
        setgm("Assistance Manager")
        setid("KL@122")
        setpassword("***********")
        setdob("08/04/1988")
        setshift("Evening")

    }
    return (
        <>
            <h1>Welcome to Tata Group</h1>
            <h2>Name:-{name}</h2>
            <h2>Posting:-{gm}</h2>
            <h2>ID:-{id}</h2>
            <h2>Password:-{password}</h2>
            <h2>DOB:-{dob}</h2>
            <h2>Shift:-{shift}</h2>

            <button onClick={pass}>Pass Here</button>
        </>


    )
}
export default Data;