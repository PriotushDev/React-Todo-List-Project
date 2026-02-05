export default function TodoItem({todo, onToggle}) {
    return (
        <li
            onClick={() => onToggle(todo.id)}
            style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
            }}
        >
            {todo.title}
        </li>
    );
}