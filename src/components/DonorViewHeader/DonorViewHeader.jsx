import React from 'react'
import './donorviewheader.scss'
import {Button} from 'antd'
import {CSVLink} from "react-csv";


const DonorViewHeader = (props) => {
  return (
    <div className='header'>
      <div className='vertical-line'/>
     <div className='heading'>{props.heading}</div>
     <div className='horizontal-line'/>
     <Button style={{backgroundColor:' #404143',borderColor:' #2d3446',color:'white',marginTop:'12px',marginLeft:'2%'}}><CSVLink data={props.data}>EXPORT</CSVLink></Button>
     <Button style={{backgroundColor:' #404143',borderColor:' #2d3446',color:'white',marginTop:'12px',marginLeft:'2%'}}  onClick={()=>{props.onAdd()}}>DONATE</Button>
    </div>
  )
}

export default DonorViewHeader