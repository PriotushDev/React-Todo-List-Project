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
    // load favorites from localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favPosts")) || [];
    setFavorites(storedFavs);

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
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
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <p className="text-danger text-center mt-4">{error}</p>;

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Posts</h3>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search post..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="row">
        {filteredPosts.map((post) => (
          <div key={post.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <button
                    onClick={() => toggleFavorite(post.id)}
                    className="btn btn-link p-0 me-1"
                    style={{ fontSize: "18px" }}
                  >
                    {favorites.includes(post.id) ? "❤️" : "🤍"}
                  </button>
                  {post.title}
                </h5>

                <p className="card-text">
                  {post.body.substring(0, 80)}...
                </p>

                <Link
                  to={`/posts/${post.id}`}
                  className="btn btn-sm btn-primary"
                >
                  View Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
