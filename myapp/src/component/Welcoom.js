import React , {useState , useEffect} from 'react'
const Welcoom = () => {
    
    const [numberA,setNumberA] = useState(0)
    const [numberB,setNumberB] = useState(0)
    useEffect(() => {
        console.log("test")
    })
    useEffect(() => {
        alert('A is changed.')
    },[numberA])
    return (
        <div>
            Welcoom
            <br />
            Number A : {numberA}
            <br />
            Number B : {numberB}
            <br />
            <button onClick={() => setNumberA(numberA+1)}>Click Number A</button>
            <button onClick={() => setNumberB(numberB+1)}>Click Number B</button>

        </div>
    )
}
export default Welcoom;