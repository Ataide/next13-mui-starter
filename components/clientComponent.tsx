"use client"

import { Button, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';

interface ClientComponentsProps {
  data: any
  handleSave?: any
}

export default function ClientComponent({ data, handleSave }: ClientComponentsProps) {
  const [todos, setTodos] = useState(data)
  console.log(data)

  // async function getTodos() {
  //   const response = await fetch('/api/v1/todos', { cache: 'no-store' });
  //   const data = await response.json();
  //   alert('Entrei')
  //   console.log(data)
  //   setTodos(data)
  // }

  // useEffect(() => {
  //   getTodos();
  
    
  // }, [])

  return (
    <>
       
      <Button onClick={async () => {
        await handleSave("foobar");
        alert("item has been deleted");
      }}>
        delete item
      </Button>

      {todos.map((todo: any) => {
        return(<h1>{todo.id}</h1>)

      })}

      
    </>
  )
     

}