import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Loader from "../components/Loader";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=10"
                );
                setTodos(response.data);
            } catch {
                setError("Failed to load todos");
            } finally {
                setLoading(false);
            }
        };
        fetchTodos();
    }, []);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <Loader />;
    if (error) return <p className="text-danger text-center mt-4">{error}</p>;

    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;

        setTodos([
            {
                id: Date.now(),
                title: newTodo,
                completed: false,
            },
            ...todos,
        ]);
        setNewTodo("");
    };

    return (
        <div className="container mt-4">
            {/* HEADER */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="mb-0">Todo List</h3>
                <span className="badge bg-primary">
                    Total: {todos.length}
                </span>
            </div>

            {/* ADD TODO CARD */}
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <form onSubmit={addTodo}>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="✍️ Add a new task..."
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn btn-success px-4"
                            >
                                ➕ Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* SEARCH */}
            <input
                type="text"
                className="form-control mb-3"
                placeholder="🔍 Search todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* TODO LIST */}
            <div className="card shadow-sm">
                <ul className="list-group list-group-flush">
                    {filteredTodos.length > 0 ? (
                        filteredTodos.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={toggleTodo}
                            />
                        ))
                    ) : (
                        <li className="list-group-item text-center text-muted">
                            No todos found
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
