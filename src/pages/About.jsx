import Header from "../components/About/Header"
import { useState } from "react"

const AboutPage = () => {
  const [ count, setCount ] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Header count={count}/>
      About Page
      <button onClick={ handleIncrement }>Increment</button>
    </div>
  )
}
  
export default AboutPage