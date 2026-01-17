import React, { useState } from "react";
import "./FromHanding.css";
const FromHanding = () => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log(name);

    setname("");
  };
  const [name, setname] = useState("");

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
          value={name}
          required
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FromHanding;
