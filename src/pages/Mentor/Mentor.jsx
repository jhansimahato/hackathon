import './mentor.scss'

import React from 'react'
import Header from '../../components/Header/Header'
import MentorTable from '../../components/MentorTable/MentorTable'
import {Modal,Input} from 'antd';
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';


const Mentor = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);
  
  const addModalHandler = () => {
    setAdd(!add);
  }

  const resetAddHandler = () => {
    setAdd(false);
    setAddData(null);

  }

  const addHandler = () => {
    setAdd(false);
    setAddData(null)
  }
  const customData = [
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      email:'helloworld@gmail.com'
    },


  ];
  return (
    <div className='mentor'>
        <div className='mentorContainer'>
            <Navbar/>
            <Header heading="MENTOR" data={customData} onAdd={addModalHandler}/>
            <div className='data-table'>
              <MentorTable data={customData}/>
            </div>
        </div>

      
        <Modal
               title="Add Mentor"
               visible={add}
               onCancel={()=>{resetAddHandler();}}
               onOk={()=>{addHandler()}}
               okText="Save"
               style={{width:'100px'}}
        >
            
         <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="name"  className="label" style={{width:'25%'}}>Name:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,name: e.target.value}
          })
        }}/>
        </div> 
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="phone_no"  className="label" style={{width:'25%'}}>Phone No:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,phone_no: e.target.value}
          })
        }}/>
        </div> 
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="email"  className="label" style={{width:'25%'}}>Email:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,email: e.target.value}
          })
        }}/>
        </div> 
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="locality"  className="label" style={{width:'25%'}}>Locality:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,locality: e.target.value}
          })
        }}/>
        </div>  

        </Modal>
  
    </div>
  )
}

export default Mentor;