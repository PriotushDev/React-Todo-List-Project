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
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id}`
                );
                setPost(response.data);
            } catch (err) {
                setError("Failed to load post");
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    // ⭐ toggle favorite
    const toggleFavorite = () => {
        let updatedFavorites;

        if (favorites.includes(post.id)) {
            updatedFavorites = favorites.filter((fid) => fid !== post.id);
        } else {
            updatedFavorites = [...favorites, post.id];
        }

        setFavorites(updatedFavorites);
        localStorage.setItem("favPosts", JSON.stringify(updatedFavorites));
    };

    if (loading) return <Loader />;
    if (error) return <p className="text-danger text-center mt-4">Error: {error}</p>;

    const isFavorite = favorites.includes(post.id);

    return (
        <div className="container mt-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    {/* Top actions */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                            onClick={toggleFavorite}
                            className={`btn ${
                                isFavorite
                                    ? "btn-outline-danger"
                                    : "btn-outline-secondary"
                            }`}
                        >
                            {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorite"}
                        </button>

                        <Link to="/posts" className="btn btn-secondary btn-sm">
                            ⬅ Back to Posts
                        </Link>
                    </div>

                    {/* Post content */}
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text mt-3">{post.body}</p>
                </div>
            </div>
        </div>
    );
}
