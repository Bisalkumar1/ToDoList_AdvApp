import React, { useState } from 'react'

import TodoListAdvComp from './TodoListAdvComp';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';


const TodolistAdv = () => {
const [item,setItem]=useState("");
const [editid,upeditid]=useState(null);
const [toggleedit,uptoggleedit]=useState(false);

    const newItem=(e)=>{
setItem(e.target.value);
    }
const [itemslist,setitemslist]=useState([]);

const addItem=()=>{
    if(item!==""){
      if(toggleedit){
        setitemslist(
          itemslist.map((arElem)=>{
            if(arElem.id===editid){
              return {...arElem,name:item};
            }
            return arElem;
          } )
        )
        upeditid(null);
        uptoggleedit(false);

      }
      else{
const allitem={id:new Date().getTime().toString() ,name:item};
setitemslist([...itemslist,allitem]);
      } 
      setItem(""); 
}
else{
  alert("Please Enter An Item First");
}

};


const deleteItem=(ind)=>{

  setitemslist(
    itemslist.filter((Elem)=>{
      return Elem.id!==ind;
    })
  )

};

const editItem=(ind)=>{
uptoggleedit(true);
const eit=itemslist.find((arElem)=>{
return arElem.id===ind;
});
setItem(eit.name);
upeditid(eit.id);

};

  return (
    <>
    <div className="main_div">
        <div className="centre">
            <header>ToDo List</header>
            <br />

<div className="inputpart">
                <input type="text" placeholder='Add An Item' value={item} onChange={newItem}/>
                
        { toggleedit ?  <Tooltip title="Update">
       <Button className="nbtn" onClick={addItem}> <EditTwoToneIcon/> </Button>
      </Tooltip> : <Tooltip title="Add">
       <Button className="nbtn" onClick={addItem}><AddIcon/></Button>
      </Tooltip>     }      
            </div>
    <ol>
       { itemslist.map((arElem)=>{
          return <TodoListAdvComp
            key={arElem.id}
            id={arElem.id}
            value={arElem.name}
            onselect={deleteItem}
            onEdit={editItem}
          />;
        })
       }
    </ol>

        </div>
    </div>
    </>
  )
}

export default TodolistAdv