import React from 'react'
import './datatables.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

function Datatables() {

  const [data, setData] = React.useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}> */}
              <div className="viewButton">View</div>
            {/* </Link> */}
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

    

  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatables
