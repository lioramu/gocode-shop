
import { useState } from "react";
function ToggleButten (){
   const [title, setTitle]= useState(true);
    return (
    
<div>

<button onClick={()=>{ setTitle(!title)}}>show/hide </button>
{title && <h1> hello </h1>}

</div>
)};
    
export default ToggleButten;

