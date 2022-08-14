import React from 'react'
import './sidebar.scss'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>lamadmin</span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardOutlinedIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LIST</p>
          <li>
            <GroupOutlinedIcon className='icon' />
            <span>Users</span>
          </li>
          <li>
            <CategoryOutlinedIcon className='icon' />
            <span>Product</span>
          </li>
          <li>
            <AddCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Deliveries</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <QueryStatsOutlinedIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationAddOutlinedIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LoginOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
      </div>
    </div>
  )
}

export default Sidebar
