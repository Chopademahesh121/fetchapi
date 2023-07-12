import { useState,useEffect } from "react";

const UserEffect = () => {

    const [count, setcount] = useState(0)
    useEffect(()=> {
        alert(count);
    console.log("useEffect Content")
    },[count===4,count===9])


    function incrementHandler(){
        setcount(count+1)
    }
    return(
        <>
        
        <h1>Hey Hello, I am a UseEffect Component</h1>
        
        <h2>{count}</h2>
        <button onClick={incrementHandler}>Increment</button>
        </>
    )
}
export default UserEffect;