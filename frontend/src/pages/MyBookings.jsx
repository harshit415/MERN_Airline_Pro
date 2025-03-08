import React from 'react'
import {useState , useEffect} from "react"
import axios from "axios"
import BASE_URL from "../config"
const MyBookings = () => {
    let[apiData , setApiData] = useState([])

    let loadData = async()=>{
        try {
            let api = `${BASE_URL}/airway/getData`
            let res = await axios.get(api)
            console.log(res.data)
            setApiData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        loadData()
    },[])
  return (
    <>
    
   <table border = "1">
     <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number </th>
            <th>Class</th>
            <th>Country</th>
        </tr>
     </thead>
     <tbody>
        {
            apiData.map((e , index)=>{
                return <tr key = {index}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.flightclass}</td>
                    <td>{e.country}</td>
                </tr>
            })
        }

     </tbody>
   </table>
    </>
  )
}

export default MyBookings
