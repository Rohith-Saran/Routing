import { useContext} from "react"
import { CountContext } from "./context";
 function App() {

  return (
  <div> 
   
   <Count />
   
   hii
   then 
   how is life
   llll
   </div>
  )
  }

  function Count (  ) {
  return <div>
  <CountRenderer />
  <Buttons  />
  </div>
  }

function CountRenderer( ) {
const count = 0;
return <div>
{count}
</div>
}

function Buttons ( {setCount}) {
const count = 0;
return <div>
<button onClick={() => {
setCount (count + 1) 
}}>+</button>

<button onClick={() => {
setCount (count - 1) 
}}>-</button>
</div>
}

export default App
