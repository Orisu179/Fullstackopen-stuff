import React from 'react'
const Total = ({parts}) => {
  return (
    <b>total of {parts.reduce((prev, cur) => prev + cur.exercises,0)}</b>
  )
}

export default Total
