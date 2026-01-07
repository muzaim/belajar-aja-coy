import React, { useState, useEffect } from "react"
import { fetchTodos } from "../lib/api"
import { Todo } from "../lib/type"

const ListUser = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos()
            setTodos(data)
        }
        getTodos()
    }, [])

    return (
        <div>
            {todos.map((u) => (
                <div key={u.id}>{u.title}</div>
            ))}
        </div>
    )
}

export default ListUser
