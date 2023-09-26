import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const TodoListAdvComp = (props) => {

    const [line,upline]=useState(false);

const cutIt=()=>{
    upline(true);
}

  return (
    <>
    <div className="todo_style">
    
    <Tooltip  title={line?"Delete":"Cut from list"}> 
<span onClick={line? ()=>{
    props.onselect(props.id)
}:cutIt}>
<DeleteIcon className="deleteIcon"/></span>
</Tooltip>

    {line?"":
<Tooltip title="Edit">
<span onClick={()=>{props.onEdit(props.id)}} ><EditTwoToneIcon  className="EditIcon"/></span></Tooltip>
}
  <li style={{textDecoration:line? "line-through":"none"}} >{props.value}</li>
    </div>
    </>
  )
}

export default TodoListAdvComp