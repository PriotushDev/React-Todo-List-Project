import axios from "axios";
import { useEffect, useState } from "react";

export default function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);  // life cycle start
            setError(null);  // reset previos error

            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10");
                setTodos(response.data);
            } catch (error) {
                setError("Failed to Load Data");
            } finally {
                setLoading(false); // life cycle end
            }
        };
        fetchTodos();
    }, []);

    if (loading) {
        return <p>Loading todos...</p>
    }

    if (error) {
        return <p>Error: {error} </p>
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
            {todos.map((todo) =>(
                <li>
                {todo.title} - {todo.completed ? "Done" : "Process"}
                </li>
            ))}
            </ul>
        </div>
    )


}