
//  import axios from "axios";
//  interface todo{
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
//  }
export default  async function User() {
  
 
  //  const response  = await fetch("https://jsonplaceholder.typicode.com/todos/");
  //  const data :todo[] = await  response.json() ;
  
    
  const response  = await fetch("http://localhost:3000/api/v1/users/details");
    const data  = await  response.json() ;
  
 
    return (
            <div>
               <h2>User Page</h2>
                {/* {data.map((todo) => (
                  <div key={todo.id}>
                    <p>User ID: {todo.userId}</p>
                    <p>Title: {todo.title}</p>
                    <hr />
                  </div>
                ))} */}

                {data.email}
                {data.password}
            </div>
  
          
    );
  }
  