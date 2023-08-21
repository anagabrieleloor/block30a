import {Routes, Route, Link} from "react-router-dom";
import React, { useState } from "react";
import { newPost } from "../API";

export default function NewPost({posts, setPosts}) {
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [deliver, setDeliver] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        const APIData = await newPost();
        if (APIData.success) {
            console.log("New Post: ", APIData.data.newPost);

            const newPostList = [...posts, APIData.data.newPost];
            setPosts(newPostList);

            setPosts("");
        } else {
            setError(APIData.error.message);
        }
    }

    return (
    <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <label>item: </label>
        <input 
        value={title}
        type="text"
        name="title"
        placeholder="item title"
        onChange={(e) => setTitle(e.target.value)}
        /> <br />
        <label>description: </label>
        <input 
        value={description}
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        /><br />
        <label>price: </label>
        <input 
        value={price}
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
        /><br />
        <label>delivery: </label>
        <input 
        value={deliver}
        type="checkbox"
        name="deliver"
        placeholder="deliver"
        onChange={() => {
            setDeliver(!deliver);
          }} /> <br />
        <button>Submit</button>
        </form>
    )
}