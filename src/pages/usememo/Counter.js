import React, {useState, useMemo} from 'react'

const Counter = () => {
    const [couterone, setCounterOne] = useState(0)
    const [coutertwo, setCounterTwo] = useState(0)

    const IncrementOne =()=>{
        setCounterOne(couterone + 1)
    }

    const IncrementTwo =()=>{
        setCounterTwo(coutertwo + 1)
    }

    
    const isEven = useMemo(()=>{
        let numrows = 5000 
        for (var i=0; i < numrows; i++) {
            console.log(i)
        }
        return couterone % 2 ==0
    },[couterone])

  return (
    <>
        <div>
            <div>
                <button onClick={IncrementOne}>Count one - {couterone}</button>
                <span>{isEven ? 'Even' : 'odd'}</span>
            </div>
            <div><button onClick={IncrementTwo}>Count two- {coutertwo}</button></div>
        </div>
    </>
  )
}

export default Counter