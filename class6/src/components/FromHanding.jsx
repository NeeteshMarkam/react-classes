import React, { useState } from "react";
import "./FromHanding.css";
const FromHanding = () => {
    const [inputName, setname] = useState("");
    
    const [allusers, setallusers] = useState(['neetesh'])

    const submithandler = (e) => {
      e.preventDefault();

      const oldUser= [...allusers]

      oldUser.push(inputName)
      console.log(oldUser);
      


    setallusers(oldUser)
      
      setname('');

    };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter name"
          value={inputName}
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
{
    allusers.map((elem,idx)=>{
      return  <h1 key = {idx}>{elem}</h1>
    })
}
    </div>
  );
};

export default FromHanding;
