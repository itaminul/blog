import React, { useEffect, useMemo, useState } from 'react'
import SideBar from '../../../layouts/SideBar'
import  Table  from './Table'
import { useSelector } from 'react-redux'

const BatchIndex = () => {

    const open = useSelector((state) => state.sidebar.open)
    
    const [data, setData] = useState([])

    useEffect(() => {
      fetch('/MOK_DATA.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(function(response){
        //console.log(response)
        return response.json();
      })
      .then(function(data) {
        setData(data);
      });
    }, [])

    const columns = useMemo(
      () => [
        {
          Header: 'ID',
          accessor: 'id', // accessor is the "key" in the data
        },
        {
          Header: 'Name',
          accessor: 'name', // accessor is the "key" in the data
        },
        {
          Header: 'Address',
          accessor: 'address', // accessor is the "key" in the data
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
