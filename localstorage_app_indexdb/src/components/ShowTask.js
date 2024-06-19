export const ShowTask = ({tasklist, setTasklist, task, setTask, handleDeleteTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        handleDeleteTask(id);
    }

    return (
        <section className="showtask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.lenght}</span>
                </div>
                <button onClick={() => setTasklist([])} className="clearAll">ClearAll</button>
            </div>
            <ul>
                {tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className="name">{todo.name}</span>
                            <span className="time">{todo.time}</span>
                        </p>
                        <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                        <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
                    </li>
                )) }
            </ul>
        </section>


    )



}