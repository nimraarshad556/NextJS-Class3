"use client"; // This directive ensures the component is a client component

import{useState} from 'react'

export default function Button() {
    const a ="abc"
    console.log(a);
    
    const [count, setCount] = useState(0);
return (

    <div>
      Home Page
      <button onClick={()=> setCount(count + 1)}>
      You clicked {count} times
</button>
    </div>
  
  )
}
