import React, { useState } from 'react'
import './Age_counter.css'

const Age_counter = () => {

  const [dob, setdob] = useState('')
  const [age, setage] = useState({ "year": "", "month": "", "days": "" })

  const calculator = () => {
    if (!dob) return

    const bithdate = new Date(dob)
    const today = new Date()

    const years = today.getFullYear() - bithdate.getFullYear()
    const month = today.getMonth() - bithdate.getMonth()
    const days = today.getDate() - bithdate.getDate()

    if (days < 0) {
      month--;
      const addmonth = new Date(today.getFullYear(), today.getMonth(), 0)
      days += addmonth.getDate()
    }

    if (month < 0) {
      years--;
      month += 12
    }

    setage({ years, month, days })
  }

  return (
    <div className='container'>
      <div className='main'>
          <h1>Age Calculator</h1>
        <div className='input'>
          <div className='enter_age'>
            <input type='date' value={dob} onChange={(e) => setdob(e.target.value)}></input>
          </div>
          <div className='search'>
            <button onClick={calculator}>Search</button>
          </div>
        </div>
        <div className='output'>
          <div>
            <button><p>{age.years || 0}</p></button>
            <h3>Years</h3>
          </div>
          <div>
            <button><p>{age.month || 0}</p></button>
            <h3>Months</h3>
          </div>
          <div>
            <button><p>{age.days || 0}</p></button>
            <h3>Days</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Age_counter