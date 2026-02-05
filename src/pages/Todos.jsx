import axios from "axios";
import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true); // life cycle start
            setError(null); // reset previos error

            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/todos?_limit=10",
                );
                setTodos(response.data);
            } catch (error) {
                setError("Failed to Load Data");
            } finally {
                setLoading(false); // life cycle end
            }
        };
        fetchTodos();
    }, []);

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id == id ? { ...todo, completed: !todo.completed } : todo,
        );
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter((todo) =>
        todo.title.toLowerCase().includes(search.toLowerCase()),
    );

    if (loading) {
        return <p>Loading todos...</p>;
    }

    if (error) {
        return <p>Error: {error} </p>;
    }

    const addTodo = (e) => {
        e.preventDefault();

        if (search.trim() === "") return;

        const newTodo = {
            id: Date.now(),
            title: search,
            completed: false,
        };

        setTodos([newTodo, ...todos]);
        setSearch("");
    };

    return (
        <div>
            <h1>Todo List</h1>

            {/* Search */}
            <input
                type="text"
                placeholder="Search todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
                ))}
            </ul>
        </div>
    );
}
