import axios from "axios";


  async function getBlog()
  {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
     return  response.data;
  }
export default async function Blog ()
{
    const data =  await getBlog()

    return (
          <div>
               {data.map((blog:Itodo, index: number) => <Todo key={index} title={blog.title} completed={blog.completed} />)}
         </div>
    )
 }
interface Itodo {
    title : string,
    completed : string
}

function Todo({title,completed} : Itodo)
{

    return <div>{title} {completed ? "done": "notdone"}</div>

}