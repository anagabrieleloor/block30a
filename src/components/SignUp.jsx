import { useState } from "react"



export default function SignUp() {
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
           <h3>sign up</h3> 
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