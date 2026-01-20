import React, { useState } from 'react'
import './ClassWork.css'
const ClassWork = () => {
const [logo, setlogo] = useState('N');
const [name, setname] = useState('Neetesh')
const [phoneNumber, setphoneNumber] = useState('6262634750')
  return (
    <div>
        <div className="contact">
            <div className="logo">{logo}
            </div>
            <div className="details">
                <div className="name">{name}</div>
                <div className="phoneNumber">{phoneNumber}</div>
            </div>
        </div>
    </div>
  )
}

export default ClassWork