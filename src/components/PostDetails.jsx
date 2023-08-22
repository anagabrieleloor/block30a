import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost } from "../API";

// import styles from "../css/PlayerCard.module.css";


export default function PostDetails({ post }) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const matchedPost = posts.find((post) => {
        return post._id == postId
    });

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
            <h1>{matchedPost._id}: {postId}</h1>
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