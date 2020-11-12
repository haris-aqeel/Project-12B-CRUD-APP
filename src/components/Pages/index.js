import React from 'react'
import {create, readAll, update, deleteTodo, batchDeleteTodo} from '../utils/api';




function Home() {


    const [allTodos, setallTodos] = React.useState([]);
    const [input, setInput] = React.useState("");
    
    React.useEffect(()=> {

        const data = await readAll();
        console.log(data)


    }, [])

    const AddTodo = () => {

        const response = update(Math.random()*Math.random() , input)
        console.log(response)

    }


    return (
        <div>
            <div>
                <input type="text" onChange = {e => setInput(e.target.value)} value = {input}/>
                <button type="submit" onClick={() => AddTodo}>Add Task</button>
            </div>


            {allTodos.map((todo, index)=> {
                return <div key = {index}>{todo}</div>
            })}
        </div>
    )
}

export default Home
