import React from "react"
import { useNavigate } from "react-router-dom"
import { deletePost } from "../API";


export default function PostsList ({ post }) {
    const navigate = useNavigate();
    return (
        <div id="posts">
            {/* <h3>{post._id}</h3> */}
            <p>{post.username}</p>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <p>Price: {post.price}</p>
            <p>Location: {post.location}</p>
            <button onClick={() => {
                navigate(`/posts/${post._id}`);
            }}
            >
                See Details 
                </button>
          
        </div>
    );
}