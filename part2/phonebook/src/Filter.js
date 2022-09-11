import React from 'react'
import { useState } from 'react'

const Filter = ({newInput, handleInputChange}) => {
  return (
    <div>
      filter shown with<input
          value={newInput}
          onChange={handleInputChange} />
    </div>
  )
}

export default Filter
