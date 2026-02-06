import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // 🔹 load favorites (sync)
    const storedFavs = JSON.parse(localStorage.getItem("favPosts")) || [];
    setFavorites(storedFavs);

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

  const toggleFavorite = (id) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter((fid) => fid !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    localStorage.setItem("favPosts", JSON.stringify(updated));
  };

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
            <h4>
              <button
                onClick={() => toggleFavorite(post.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {favorites.includes(post.id) ? "❤️" : "🤍"}
              </button>

              {post.title}

            </h4>
            <p>{post.body.substring(0, 80)}...</p>

            <Link to={`/posts/${post.id}`}>View Detail</Link>
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}
