import { useActionState } from "react";

function increment(prevState){
    return prevState + 1;
}

export default function Counter(){
    const [count, formAction, isPending ] = useActionState(increment, 0)
    console.log('formAction',formAction)
    console.log('isPending',isPending)

    return (
        <form action={formAction}>
            <p>Count: {count}</p>
            <button type="submit" disabled={isPending}>
                {isPending?'Adding...':'Add + 1'}
            </button>
        </form>
    )
}