import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react';

export default function Tasks({token} : any) {
    const [tasks, setTasks] = useState([])
    const fetchData = async(token : any)=>{
      const response = await axios.get('http://localhost:5200/api/tasks',{
          headers:{
              'Authorization': `Bearer ${token}`
          }
      });
      setTasks(response.data.tasks)
      console.log(response.data);
    }
    useEffect(()=>{
     if(token){
      fetchData(token);
     }
    },[]);
  
  
    return (
      <div>{tasks.map((task,index)=>(
          <p key={index}>{task['title']}</p>
      ))}</div>
    )
  }