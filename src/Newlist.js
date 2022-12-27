import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PostAddIcon from '@mui/icons-material/PostAdd';
export default function Newlist() {
    const [input,setInput] = useState("")
    let navigate = useNavigate()
    const changeRoute = ()=>{
        let path = input
        setInput("")
        navigate(path)
    }
    return (
        <div id="newHead">
            <div className="box" id="heading">
                <h1>New List</h1>
            </div>
            <div className="box">
                <form class="item">
                    <input type="text" name="Text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Add new list" autocomplete="off" />
                    <button type="submit" onClick={changeRoute}> <PostAddIcon></PostAddIcon> </button>
                </form>
            </div>
        </div>
    )
}