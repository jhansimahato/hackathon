
import React from 'react'
import './sessionheader.scss'
import {Button} from 'antd'
import {CSVLink} from "react-csv";


const SessionHeader = (props) => {
  return (
    <div className='header'>
      <div className='vertical-line'/>
     <div className='heading'>{props.heading}</div>
     <div className='horizontal-line'/>
     <Button style={{backgroundColor:' #404143',borderColor:' #2d3446',color:'white',marginTop:'12px',marginLeft:'2%'}}><CSVLink data={props.data}>Export</CSVLink></Button>
    </div>
  )
}

export default SessionHeader