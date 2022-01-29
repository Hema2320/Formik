import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const url="https://61f497b610f0f7001768c981.mockapi.io/movies/"
function Allmovies() {
  let [moives,setmovies]=useState([]);
  useEffect(()=>{
    getData();
  },[])

  let getData =async()=>{
    try{
       let response = await axios.get(url)
       setmovies(response.data)
    }catch(error){
      console.log('Error')
    }
  }
  return <>
    <Table striped bordered hover>
            <thead>
                <tr>
                    <th>FName</th>
                    <th>LName</th>
                    <th>Movie Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
              {
                moives.map((e,i)=>{
                  return <tr key={e.i}>
                    <td>{e.fn}</td>
                    <td>{e.ln}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.password}</td>
                    <td>{e.rating}</td>
                  </tr>
                })
              }
            </tbody>
            </Table>
  </>;
}

export default Allmovies;
