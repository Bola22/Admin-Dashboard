import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


function Fearured() {
  return (
    <div className='featured'>
        <div className="top">
          <h1 className="title">TOTAL REVENUE</h1>
          <MoreVertOutlinedIcon />
        </div>
        <div className="bottom">
          <div className="featuredChart">
          <CircularProgressbar value={70} text="70" strokeWidth={5} />
          </div>
          <p className="title">Total sales today</p>
        <p className="amount">$450</p>
        <p className="desc">
          Previous transaction processing. Last payment may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon className="icon" />
              <div className="itemAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon className="icon" />
              <div className="itemAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon className="icon" />
              <div className="itemAmount">$12.4k</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Fearured
