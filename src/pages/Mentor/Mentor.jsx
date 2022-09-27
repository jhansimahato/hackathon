import './mentor.scss'

import React, { useState, useEffect } from "react";

import MentorHeader from '../../components/MentorHeader/MentorHeader';
import MentorTable from '../../components/MentorTable/MentorTable'
import {Modal,Input} from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import { auth, db } from "../../context/firebase";
import { isEmpty } from 'lodash';



const Mentor = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);
  const [mentordet, setmentordet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [modifiedData,setModifiedData] = useState([]);
  
  useEffect(() => {

    setisLoading(true);
   var unsubscribe =  db.collection('Mentor')
   .onSnapshot((snapshot) => {
                
                  setmentordet(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                  )  
            });

  }, []);
  useEffect(() => {
   if(mentordet.length)
   {
     setisLoading(false);
     const modifiedData = mentordet.map(({mentorId,name,city,mobile,email,...item})=>({

      generatedUid:item.id,
      name: isEmpty(name)?(item.data.name):name,
      mobile: isEmpty(mobile)?item.data.mobile:mobile,
      email: isEmpty(email)?(item.data.email):email,
      location: isEmpty(city)?(item.data.city):city,
      mentorId: isEmpty(mentorId)?(item.data.mentorId):mentorId,
      
   }));
   console.log(modifiedData);
   setModifiedData(modifiedData);

   }

  }, [mentordet]);
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
            <MentorHeader heading="MENTOR" data={customData} onAdd={addModalHandler}/>
            <div className='data-table'>
              <MentorTable data={modifiedData} loading={isLoading}/>
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