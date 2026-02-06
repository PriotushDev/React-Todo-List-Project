import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            setError(false);

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts?_limit=10",
                );
                setPosts(response.data);
            } catch (error) {
                setError("Failed to load post");
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLocaleLowerCase()),
    );

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Posts</h1>

            {/* search */}
            <input
                type="text"
                placeholder="search post..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredPosts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body.substring(0, 80)}...</p>

                        <Link to = {`/posts/${post.id}`}>View Detail</Link>
                    </li>
                ))};
            </ul>
        </div>
    );
}
