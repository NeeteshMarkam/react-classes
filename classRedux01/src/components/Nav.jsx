import React from 'react'

const Nav = () => {
  return (
    <div className='h-20 bg-blue-500 flex justify-between p-3'>
<div className="font-serif text-5xl ">logo</div>
<div className=" flex justify-evenly gap-10">
    <a href="">home</a>
    <a href="">Service</a>
    <a href="">about</a>
    <a href="">contact</a>
    <a href="">explore</a>
</div>
    </div>
  )
}

export default Nav