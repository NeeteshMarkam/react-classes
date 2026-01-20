import React, { useState } from 'react'

const UserInput = () => {
const [phoneUser, setphoneUser] = useState('')
    const [nameUser, setnameUser] = useState('')

   const [newUser, setnewUser] = useState([])
 const submitHanding = (e)=>{
    e.preventDefault();

    setnewUser((prev)=>{

        const updateUsers = [...prev,{nameUser,phoneUser}];
        console.log(updateUsers);
        
        return updateUsers;
    }
    );
    
    // setnewUser([...newUser,{phoneUser,nameUser}])

setnameUser('')
setphoneUser('')
 }
  return (
    <div>
       <form onSubmit={(e)=>{
        submitHanding(e)
       }}>
        <div className="inputs">
            <input type="number" 
             required
             placeholder='enter your number'
        value={phoneUser}
        onChange={(e)=>{
            setphoneUser(e.target.value)
        }}
        />
         <input type="text" 
         required placeholder='Enter your name'
        value={nameUser}
        onChange={(e)=>{
            setnameUser(e.target.value)
        }}
        />
        </div>
        <button type="submit"
        
        >Submit</button>
       </form>
       
       {
    details.map((elem,idx)=>{
      return  <h1 key = {idx}>{elem}</h1>
    })
}
    </div>
  )
}

export default UserInput