import React from 'react'
import './DropdownItem.css'

export const DropdownItem = ({categoria, url}) => {
  return (
    <li><a className="dropdown-item dropdown-item-style" href={url}>{categoria}</a></li>
  )
}
