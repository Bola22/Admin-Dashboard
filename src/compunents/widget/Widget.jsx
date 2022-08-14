import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

function Widget({type}) {

    let data;

    const amount = 100;
    const diff =  10;


    switch (type) {
        case 'user':
            data ={
                title: 'USERS',
                isMoney: false,
                link:'see all users',
                icon:<PersonOutlineOutlinedIcon
                 className='icon' 
                 style={{color: 'crimson',
                 backgroundColor: 'rgba(255, 0, 0, 0.2'
                }}/>
            } 
            break;
            case 'order':
            data ={
                title: 'ORDERS',
                isMoney: false,
                link:'see all orders',
                icon:<AddShoppingCartIcon
                 className='icon'
                 style={{color: 'green',
                 backgroundColor: 'rgba(0, 128, 0, 0.2'
                }}/>
            }
            break;
            case 'earnings':
            data ={
                title: 'EARNINGS',
                isMoney: true,
                link:'see net earnings',
                icon:<PaidIcon 
                className='icon'style={{color: 'purple',
                backgroundColor: 'rgba(128, 0, 128, 0.2'
               }}/>
            }
            break;
            case 'balance':
            data ={
                title: 'BALANCE',
                isMoney: true,
                link:'see details',
                icon:<AccountBalanceWalletIcon className='icon'/>
            }
            break;
            default:
                break
    }

  return (
    <div className='widget'>
      <div className="left">
        <span className='title'>{data.title}</span>
        <span className='counter'>{data.isMoney && "$"}{amount}</span>
        <span className='link'>{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            <KeyboardArrowDownOutlinedIcon />
            {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
