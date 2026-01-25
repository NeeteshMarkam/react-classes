import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="border flex flex-col justify-center h-80 w-55 rounded-3xl m-2 relative">
      <div className="w-52 m-1 border h-30 rounded-2xl ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FFJxYBuotiLYTa-lKDDlEGXsJ176YZEHOQ&s"
          alt=""
          className="size-full object-cover rounded-2xl"
        />
      </div>
      <div className=" top-15 left-2 absolute rounded-full   h-20 w-20 bg-white flex justify-center">
        <img
          src={
            props.img
          }
          className=" size-full object-cover p-1 bg-auto rounded-full"
          alt=""
        />
      </div>
      <div className="h-30 "></div>

      <div className="m-2">
        <h1 className="text-[16px] font-bold">{props.name} </h1>
        <p className="text-[12px]">
         {props.description}
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
        <div className="socil-media"><img className='h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwDAQlynQ-LxiyR_qx-rFTitfUrwVt5Z89w&s" alt="" /></div>
        <div className="socil-media"><img className='h-10 rounded-full' src="https://www.shutterstock.com/image-vector/twitter-x-new-logo-vcetor-260nw-2359795883.jpg" alt="" /></div>
        <div className="socil-media"><img className='h-10 rounded-full' src="data:image/png;base64,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" alt="" /></div>
      </div>
      
    </div>
    </div>
  )
}

export default Card
