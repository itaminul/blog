import React, { useMemo } from 'react'
import SideBar from '../../../layouts/SideBar'
import { Table } from './Table'
import { useSelector } from 'react-redux'

const BatchIndex = () => {

    const open = useSelector((state) => state.sidebar.open)

    const data = useMemo(
      () => [
        {
          col1: 'Hello',
          col2: 'World',
        },
        {
          col1: 'react-table',
          col2: 'rocks',
        },
        {
          col1: 'whatever',
          col2: 'you want',
        },
      ],
      []
    )
  
    const columns = useMemo(
      () => [
        {
          Header: 'Column 1',
          accessor: 'col1', // accessor is the "key" in the data
        },
        {
          Header: 'Column 2',
          accessor: 'col2',
        },
      ],
      []
    )

  return (
    <div style={open == true ? {marginTop: "70px", marginLeft: "250px"} : {marginTop: "70px", marginLeft: "76px"}}>
        <SideBar />     
        <div>
            <Table columns={columns} data={data} />
          
          </div>
      
    </div>
  )
}

export default BatchIndex
