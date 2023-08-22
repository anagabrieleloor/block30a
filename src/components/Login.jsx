import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { authenticate } from "../API";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
    const users = [{ username: "Jane", password: "testpassword" }];

    

    function handleSubmit(e) {
        e.preventDefault();

        console.log({username, password});
        // authenticate();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            setAuthenticated(true)
            localStorage.setItem("authenticated", true);
        } else {
            setError(APIData.error.message);
        }
      };
    

    function resetForm() {
        setUsername("");
        setPassword("");
    }

    return (
       
        <div>
            {/* <h2>Sign Up!</h2> */}
            {username && <p>hi {username}</p>}
            {userData && (
                <p>yeeee success! welcome, {userData.username}!</p>
            )}
            {/* {error && <p>{error}</p>} */}
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
  <button type="submit">Submit</button>
  {/* <button
    type="button"
    onClick={() => {
      navigate(`/posts/users/me`);
    }}
  >
    Navigate
  </button> */}
        </form>
       
        </div>
    )
    }