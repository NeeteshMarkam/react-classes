import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userImgeUrl, setUserImgeUrl] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUser, setAllUser] = useState([]);
  const sumitHandler = (e) => {
    e.preventDefault();

    const oldUser = [...allUser];
    oldUser.push({ userName, userImgeUrl, userRole, userDesc });
    console.log(oldUser);
    setAllUser(oldUser);

    // setAllUser([...allUser,{userName,userRole,userDesc,userImgeUrl}])

    setUserName("");
    setUserDesc("");
    setUserImgeUrl("");
    setUserRole("");

  }
    const deleteHandler = (idx)=>{
      const copyuser = [...allUser]
      copyuser.splice(idx,1)
      setAllUser(copyuser)
      console.log(copyuser);
      
    }
  ;
  return (
    <div className="h-screen bg-black text-white ">
      <form
        onSubmit={(e) => {
          sumitHandler(e);
        }}
        className="py-2 flex-wrap justify-center"
      >
        <input
          className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter your name "
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image URL"
          required
          value={userImgeUrl}
          onChange={(e) => {
            setUserImgeUrl(e.target.value);
          }}
        />
        <input
          className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Role Enter"
          required
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
        />
        <input
          className=" text-xl font-semibold border-2 px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
          required
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
        />
        <button className="bg-emerald-700 px-5 py-2 active:scale-95 cursor-pointer rounded m-2 w-[90%]">
          Create User
        </button>
      </form>

      <div className="px-4 py-10 gap-4 flex flex-wrap " >
        {allUser.map((elem, idx) => {
          return (
        <Card idx={idx} elem={elem} deleteHandler={deleteHandler}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default App;
