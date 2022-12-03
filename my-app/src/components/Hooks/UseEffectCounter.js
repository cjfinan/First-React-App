import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    // useEffect runs the function you give it after every render
    // replacing DidMount and DidUpdate
    useEffect(() => {
        console.log('count 1 effect')
        document.title = count
        // this "[count]" tells useEffect to only run if count state changes
    }, [count])
    useEffect(() => {
        // pass an empty array if you only want component to render when first mounted
        console.log('creating timer');
        const interval = setInterval(() => {
            console.log('interval executed')
            setTime(time => time + 1)
        }, 1000)
        // Cleanup function with useEffect
        return () => {
            console.log('clearing interval')
            clearInterval(interval)
        }
    }, [])
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter