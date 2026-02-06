import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";

export default function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ⭐ favorite state (localStorage)
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favPosts")) || []
    );

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);   // lifecycle start
            setError(null);     // reset previous error

            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                setPost(response.data);
            } catch (err) {
                setError("Failed to load post");
            } finally {
                setLoading(false); // lifecycle end
            }
        };

        fetchPost();
    }, [id]);


    if (loading) return <Loader />;

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <Link to="/posts">⬅ Back to Posts</Link>

            <h2>{post.title}</h2>
            <p>{post.body}</p>


        </div>
    );
}
