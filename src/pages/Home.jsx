import { useOutletContext } from "react-router-dom"
import { useState, useRef, useEffect, useLayoutEffect, useMemo, useCallback } from "react"

const HomePage = () => {
  const { test } = useOutletContext()
  const [ count, setCount ] = useState(0)
  const buttonRef = useRef(null)  

  const handleIncrement = () => setCount(count + 1)

  const tests = useCallback(() => {
    return 100
  }, [])

  const memoizedCompute = useMemo(() => {
    console.log("Memoized!")
    tests();
    return 100
  }, [tests])

  // useEffect(() => {
  //   if (buttonRef.current){
  //     console.log(buttonRef.current)

  //     setTimeout(() => {
  //       buttonRef.current.style.display = 'none'
  //     }, 3000)
  //   }
  // }, [])

  // useEffect(() => {
  //   setCount((prev) => prev + 1)
  // }, [])

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     console.log(`timer count : ${count}`)
  //   }, 3000)

  //   return () => {
  //     clearTimeout(timerId)
  //   }
  // }, [count])

  // useLayoutEffect(() => {
    // setCount((prev) => prev + 1)
  // }, [])

  return (
    <div>
      Home Page { test }
      Count : {count}
      <div>
      memoizedCompute : {memoizedCompute}
      </div>
      <button ref={ buttonRef } onClick={ handleIncrement }>Increment</button>
    </div>
  )
}

export default HomePage
