import React , {useState , useEffect} from 'react'
import styled  from 'styled-components'


const Box = styled.div`
    
    color : white;
    background : pink;
`

const MessageA = styled.span`
    background : ${({color}) => color};
    color : white;
    font-size : 20px;
    font-family : 'Fira Code';
`
//extend message A 
const MessageB = styled(MessageA)`
    font-size : 5px;
    font-family : Tahoma;
`

const Welcoom = () => {
    const [color , setColor] = useState('orange')
    const [message , setMessage] = useState('')
    const [numberA,setNumberA] = useState(0)
    const [numberB,setNumberB] = useState(0)
    useEffect(() => {
        console.log("test")
    })
    useEffect(() => {
        alert('A is changed.')
    },[numberA])
    useEffect( () => {
        setTimeout(() => {
            setMessage('Hi ')
        }, 5000);
    })
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
            <br />
            {message ? `Message: ${message}` : 'Loading...'}

            <Box>styled - components</Box>

            <MessageA color={color}>Hello A </MessageA>
            <MessageB color={color}>Hello B</MessageB>
            <button style = {{marginTop: 20 , marginLeft : 20}} onClick = {() => setColor('red')}>red</button>
            <button style = {{marginTop: 20 , marginLeft : 20}} onClick = {() => setColor('yellow')}>yellow</button>
        </div>

    )
}
export default Welcoom;