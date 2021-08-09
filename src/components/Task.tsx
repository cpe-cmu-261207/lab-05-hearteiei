import { useState } from "react"
type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function; 
   
}
const Task = ({ id, name, doneFn, deleteFn }: TaskProps) => {
    const [Mouse, setIsMouseInside] = useState<boolean>(false);
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b taskdiv" onMouseEnter={() => setIsMouseInside(true)} onMouseLeave={() => setIsMouseInside(false)}>
            <span className="text-2xl"> {name} </span>
            <div className="flex space-x-1 items-center" style={(Mouse) ? { visibility: "visible" } : { visibility: "hidden" }}>
              <button id='donebtn' className="bg-green-400 w-24 text-2xl btn" onClick={() => doneFn(id,name)}>Done</button>
              <button id='delbtn' className="bg-red-400 w-24 text-2xl btn" onClick={() => deleteFn(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task