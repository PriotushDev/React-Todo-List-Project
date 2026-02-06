export default function TodoItem({ todo, onToggle }) {
    return (
        <li
            onClick={() => onToggle(todo.id)}
            className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? "text-decoration-line-through text-muted" : ""
            }`}
            style={{ cursor: "pointer" }}
        >
            <span>{todo.title}</span>

            <span className="badge bg-secondary">
                {todo.completed ? "Done" : "Pending"}
            </span>
        </li>
    );
}
