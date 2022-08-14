import React from 'react'
import "./home.scss"
import Sidebar from '../../compunents/sidebar/Sidebar'
import Navbar from '../../compunents/navbar/Navbar'
import Widget from '../../compunents/widget/Widget'
import Featured from '../../compunents/featured/Featured'
import Chart from '../../compunents/chart/Chart'
import List from '../../compunents/table/Table'

function Home() {
  return (
    <div className='home'>
      <Sidebar className='sidebar' />
      <div className='homeContainer'>
        <Navbar />
        <div className="widgets">
        <Widget type='user' />
        <Widget type='order' />
        <Widget type='earnings' />
        <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title= {'Last 6 months(Revenue)'}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <List />
        </div>
        </div>
    </div>
  )
}

export default Home
