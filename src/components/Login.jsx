import { useState } from "react"



export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    

    function handleSubmit(e) {
        e.preventDefault();

        console.log({username, password});
        authenticate();
    }

    function resetForm() {
        setUsername("");
        setPassword("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
           <h3>login</h3> 
           <label>username:</label>
           <input
           value={username}
           onChange={(e) => {
            setUsername(e.target.value);
           }}
           /> <br />
           <label>password:</label>
           <input
           value={password}
           onChange={(e) => {
            setPassword(e.target.value);
           }}
           /> <br />
           <button type="submit">submit</button>
        </form>
        </>
    )
    }