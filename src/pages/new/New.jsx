import React from 'react'
import './new.scss'
import Sidebar from'../../compunents/sidebar/Sidebar'
import Navbar from'../../compunents/navbar/Navbar'
import Noimg from'../../images/download.png'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={Noimg} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor='file' >File: <DriveFolderUploadOutlinedIcon /></label>
              <input type="file" id='file' style={{display: 'none'}}/>
             </div>
             <div className="formInput">
              <label>Username</label>
              <input type="text" placeholder="John_doe" />
             </div>
             <div className="formInput">
              <label>Name and Surname</label>
              <input type="text" placeholder="John Doe" />
             </div>
             <div className="formInput">
              <label>Email</label>
              <input type="email" placeholder="johndoe@example.com" />
             </div>
             <div className="formInput">
              <label>Phone Number</label>
              <input type="text" placeholder="+1 013 487 09" />
             </div>
             <div className="formInput">
              <label>Password</label>
              <input type="text"  />
             </div>
             <div className="formInput">
              <label>Address</label>
              <input type="text" placeholder="77 Elton John Street Inbrim" />
             </div>
             <div className="formInput">
              <label>Country</label>
              <input type="text" placeholder="USA" />
             </div>
             <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
