import Example from './layout/example';
export async function ServerComponent() {
  async function getData() {
    console.log("fetch in Server")
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/21', { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
    const data = await res.json()    
    return data;
  }
  const name = await getData(); 
  console.log(name)
  
  return (
    <>
    
        <h1>{name.userId}</h1>
    
     
    </>
   
    
     
   
   
  )
}