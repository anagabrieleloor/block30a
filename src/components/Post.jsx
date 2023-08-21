import { useState, useEffect } from "react"
import { fetchPosts, registerUser } from "../API"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Link} from "react-router-dom";
import NewPost from "./NewPost";
import PostsList from "./PostsList";





export default function Post() {
    const [posts, setPosts] = useState([]);
    const [error, setError] =useState(null);
    const [searchParam, setSearchParam] = useState("");

    useEffect(() => {
        async function getAllPosts() {
            const APIResponse = await fetchPosts();
            if (APIResponse.success) {
                setPosts(APIResponse.data.posts);
            } else {
                setError(APIResponse.error.message);
            }
            }
            getAllPosts();
        }, []);

        const postsToDisplay = searchParam
        ? posts.filter((posts) =>
        posts.content.toLowerCase().includes(searchParam)
        )
        : posts;
    

    return (
        <div>
            
            <div>
            <h1>Posts</h1>
                <label>
                    Search:{" "}
                    <input 
                    type="text"
                    placeholder="search"
                    onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
                </label>
                <Link to ="/newpost">Make A New Post</Link>
            </div>
            {/* <NewPost posts={posts} setPosts={setPosts} /> */}
            {error && <p>{error}</p>}
            {postsToDisplay.map((post) => {
                return <PostsList key={post.id} post={post} />
            })}
        </div>
    )
    }