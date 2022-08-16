import React, { useState } from 'react'
import './new.scss'
import Sidebar from'../../compunents/sidebar/Sidebar'
import Navbar from'../../compunents/navbar/Navbar'
import Noimg from'../../images/download.png'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

function New({title,inputs}) {
  const [file, setFile] = useState("")
  console.log(file)
  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : Noimg} alt="" />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
              <label htmlFor='file' >Image: <DriveFolderUploadOutlinedIcon /></label>
              <input type="file" id='file' onChange={e=>setFile(e.target.files[0])} style={{display: 'none'}}/>
             </div>

             {inputs.map((inputs) => (
              <div className="formInput" key={inputs.id}>
              <label>{inputs.label}</label>
              <input type={inputs.type} placeholder={inputs.placeholder} />
             </div>
             ))}

          
             <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
