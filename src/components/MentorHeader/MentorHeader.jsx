import './mentortable.scss'

import React from 'react'

import {Button} from 'antd'
import {CSVLink} from "react-csv";
import { useNavigate } from 'react-router-dom';


const MentorHeader = (props) => {
    const navigate = useNavigate();
  return (
    <div className='header'>
      <div className='vertical-line'/>
     <div className='heading'>{props.heading}</div>
     <div className='horizontal-line'/>
     <Button style={{backgroundColor:' #404143',borderColor:' #2d3446',color:'white',marginTop:'12px',marginLeft:'2%'}}><CSVLink data={props.data}>Export</CSVLink></Button>
     <Button style={{backgroundColor:' #404143',borderColor:' #2d3446',color:'white',marginTop:'12px',marginLeft:'2%'}}  onClick={()=>{navigate("/addmentor")}}>ADD</Button>
    </div>
  )
}

export default MentorHeader