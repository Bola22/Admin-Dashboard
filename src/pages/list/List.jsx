import React from 'react'
import Sidebar from '../../compunents/sidebar/Sidebar'
import Navbar from '../../compunents/navbar/Navbar'
import Datatables from '../../compunents/datatables/Datatables'
import './list.scss'

function list() {

  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatables />
      </div>
    </div>
  )
}

export default list
