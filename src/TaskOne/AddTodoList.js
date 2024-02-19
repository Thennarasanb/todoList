import { useState } from "react"

const AddTask = (props) =>{
const [inputValue, setInputValue] = useState("");

const submitItem = (e) => {
    e.preventDefault();
    props.onSaveData(inputValue);
}
    return (
        <>
        <form>
            <input type="text" value={inputValue} onChange={e =>{setInputValue(e.target.value)}}/>
            <button onClick={submitItem}>Add list Item</button>
        </form>
        </>
    )
}

export default AddTask;