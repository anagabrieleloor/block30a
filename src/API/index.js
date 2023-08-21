

const cohortName = "2306-ghp-et-web-ft-sf";
const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;



//fetch posts 

export const fetchPosts = async () => {
    
    try {
        const response = await fetch(`${API_URL}/posts`)

        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
    
};

//fetch single post
export async function fetchSinglePost(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`);
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}




//POST /users/register

export const registerUser = async ( )=> {
    try {
        const response = await fetch(`${API_URL}/users/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: ' ',
                    password: ' '
                }
            })
        });
        const result = await response.json();
        console.log(result)
        return result
    } catch (err) {
        console.error(err);
    }
    };


//login 
export const login = async () => {
    try {
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'whatever12',
                    password: 'alsowhatever2'
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result 
    } catch (err) {
        console.error(err);
    }
}

 
//new posts 
export const newPost = async () => {
    try {
        const response = await fetch(`${API_URL}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            },
            body: JSON.stringify({
                post: {
                    title: "My favorite stuffed animal",
                    description: "Very nice",
                    price: "$480.00",
                    willDeliver: true
                }
            })
        });
        const result = await response.json();
        console.log(result);
        return result
    } catch (err) {
        console.error(err);
    }
    }

//delete posts 
export async function deletePost(id) {
    try {
        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: "DELETE"
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
}

//authenticate

export const authenticate = async (token) => {
    try {
        const response = await fetch(`${API_URL}/signup`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({username, password})
        });
        const result = await response.json();
        console.log(result);
    } catch (err) {
        console.error(err);
    }
}

