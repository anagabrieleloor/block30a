import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchSinglePost } from "../API"

export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [error,setError] = useState(null);

    useEffect(() => {
        async function getSinglePost() {
            try {
            const APIResponse = await fetchSinglePost(id);
            if (APIResponse.success) {
                setPost(APIResponse.data.post);
            } else {
                setError(APIResponse.error.message);
            }
            } catch (error) {
                setError(error.message);
            }
        }
            getSinglePost();
        }, []);

        return (
            <div>
                {error && <p>{error}</p>}
                {post && <PostDetails post={post}/>}
            </div >
        );
}