import React from 'react'

const Profile = () =>{
    const handleSubmit = e => {
        e.preventDefault()

        const name = e.target.name.value
        const e_mail = e.target.email.value

        console.log(name,e_mail)
    }
    return (
        <form style={{marginTop : 20}} onSubmit = {handleSubmit}>
            ชื่อ : <input type="text" name="name"/>
            <br/>
            Email : <input type="email" name="email"/>
            <br />
            <button>submit</button>

        </form>
    )
}
export default Profile