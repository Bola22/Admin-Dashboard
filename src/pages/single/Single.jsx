import React from 'react'
import './single.scss'
import Navbar from '../../compunents/navbar/Navbar'
import Sidebar from '../../compunents/sidebar/Sidebar'
import profilePic from '../../images/pexels-profile.jpg'
import Chart from '../../compunents/chart/Chart'
import Table from '../../compunents/table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img src={profilePic} alt="" className="itemImage" />
            <div className="details">
              <h1 className="itemTitle">Jane Doe</h1>
              <div className="detailItem">
                <span className="itemKey">Email: </span>
                <span className="itemValue">janrdoe@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">012899483</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Elton Jrn Street</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country: </span>
                <span className="itemValue">USA</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3/1} title=' User spending (Last 6 months)' />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <Table />
      </div>
      </div>
    </div>
  )
}

export default Single
