import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="border flex flex-col justify-center h-80 w-55 rounded-3xl m-2">
      <div className="w-52 m-1 border h-30 rounded-2xl ">
        <img
          src="kira.jpg"
          alt=""
          className="size-full object-cover rounded-2xl"
        />
      </div>
      <div className=" top-22 left-6 absolute rounded-full   h-20 w-20 bg-white flex justify-center">
        <img
          src="neetesh.jpg"
          className=" size-full object-cover p-1 bg-auto rounded-full"
          alt=""
        />
      </div>
      <div className="h-15 "></div>

      <div className="m-2">
        <h1 className="text-[16px] font-bold">Noah Thompson</h1>
        <p className="text-[12px]">
          Product Desiner who focuses on simplisity & usability
        </p>
      </div>
      <div className="flex gap-10 p-2 h-20">
        <div className="flex flex-col">
          <span className="font-bold">72.9k</span>
          <span className="text-sm">Likes</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">828</span>
          <span className="text-sm">Posts</span>
        </div>
        <div className="flex flex-col">
          <span className="font-bold">342.9k</span>
          <span className="text-sm">Views</span>
        </div>
      </div>

      <div className=" flex flex-row justify-around pl-2 pt-1 pb-2">
        <div className="socil-media">hello</div>
        <div className="socil-media">hello</div>
        <div className="socil-media">hello</div>
      </div>
      
    </div>
    </div>
  )
}

export default Card
