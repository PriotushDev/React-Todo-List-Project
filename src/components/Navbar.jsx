import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
            <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
            <Link to="/todos" style={{ marginRight: "10px" }}>Todos</Link>
            <Link to="/posts">Posts</Link>
        </nav>
    );
}
