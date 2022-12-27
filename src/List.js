
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
export default function List() {
    const [input, setInput] = useState("")
    const [list, setItem] = useState([])
    const [visibility, setVisibility] = useState('all');

    const addItem = (e) => {
        e.preventDefault()
        // if (!newTodo.trim()) return;
        setItem([...list, { text: input, completed: false }])
        setInput("")

    }

    const clearAll = () => {
        setItem([])
    }

    function handleToggleTodo(index) {
        const newTodos = [...list];
        newTodos[index].completed = !newTodos[index].completed;
        setItem(newTodos);
    }

    function handleSetVisibility(filter) {
        setVisibility(filter);
    }
    function getVisibleTodos() {
        switch (visibility) {
            case 'completed':
                return list.filter(t => t.completed);
            case 'not-completed':
                return list.filter(t => !t.completed);
            default:
                return list;
        }
    }
    const head = useParams();
    return (
        <div>
            <div className='box' id="heading">
                <h1>{head.list}</h1>
            </div>
            <button className='check' onClick={() => handleSetVisibility('all')}>All</button>
            <button className='check' onClick={() => handleSetVisibility('completed')}>Completed</button>
            <button className='check' onClick={() => handleSetVisibility('not-completed')}>Not completed</button>
            <div className='box'>

                {getVisibleTodos().map((item, index) => {
                    return (
                        <div key={item} className="item">
                            <input a-key={item} type="checkbox" checked={item.completed} onChange={() => handleToggleTodo(index)} />
                            <p>{item.text}</p><button a-key={item} type='submit' id='delete' onClick={(event) => {
                                const index = list.indexOf(event.target.getAttribute('a-key'))
                                let newlist = list
                                newlist.splice(index, 1)
                                setItem([...newlist])
                            }}> <RemoveIcon /> </button>

                        </div>
                    )
                })}

                <form className="item" >
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} name="Text" placeholder="New Item" autoComplete="off" />
                    <button id='addItem' type="submit" onClick={addItem} > <AddIcon></AddIcon> </button>
                </form>
                <button id='clear' onClick={clearAll}>Clear All</button>

            </div>
        </div>
    )
}
