import { useCallback, useState } from "react";


export default function UseCallBack(){
    const [count, setCount ] = useState(0)
    const increment = useCallback(()=>{
        setCount(c => c + 1)
    },[])
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Add + 1</button>
        </div>
    )

}