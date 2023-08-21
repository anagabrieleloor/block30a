import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../API";

// import styles from "../css/PlayerCard.module.css";


export default function PostDetails({ post }) {
    const navigate = useNavigate();

    async function handleDelete() {
        try {
            const result = await deletePost(post._id);
            console.log(result);
            navigate("/posts");
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <figure>
            <h3>{post._id}</h3>
            <p>{post.username}</p>
            <p>{post.title}</p>
            <p>{post.description}</p>
            <p>{post.price}</p>
            </figure>
            <button onClick={handleDelete}>Delete Post</button>
        </div>
    )
}