import { useState } from "react";

function GifSearch({onSearch}){
const [input, setInput] = useState("")

function handleSubmit(e){
    e.preventDefault()
    onSearch(input)
}

return(
    <form onSubmit={handleSubmit}> 
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
        <button type="submit">Search</button>
    </form>
)

}

export default GifSearch