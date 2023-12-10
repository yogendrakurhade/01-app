const TodoItem = (props) =>{
    return(
        <li className="todo-item">
            <span><input type="checkbox"/></span>
            <span>{props.text}</span>
            <p>...</p>
        </li>
    );
}

export default TodoItem;