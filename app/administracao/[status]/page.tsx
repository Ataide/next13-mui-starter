"use server"
import  {Typography}  from "@mui/material";
import ClientComponent from '../../../components/clientComponent';


async function StatusPage() {

  async function getData() {
    console.log("fetch in Server")
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const data = await res.json();
    return data;
  }

  const name = await getData(); 


  async function deleteItem(itemId: string) {
    "use server"; // mark function as a server action (fixes the error)

    // TODO add item deletion logic
    console.log("Estou no server");
    return null;
  }  

  return (<ClientComponent data={name} />)
}

export default StatusPage