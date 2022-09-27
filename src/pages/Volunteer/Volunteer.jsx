
import Header from '../../components/Header/Header';
import VolunteerTable from '../../components/VolunteerTable/VolunteerTable';
import './Volunteer.scss';
import React, { useState, useEffect } from "react";
import {Modal,Input} from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import { isEmpty } from 'lodash';
import { auth, db } from "../../context/firebase";

const Volunteer = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);
  const [voldet, setvoldet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [modifiedData,setModifiedData] = useState([]);
  
  useEffect(() => {

    setisLoading(true);
   var unsubscribe =  db.collection('Volunteer')
   .onSnapshot((snapshot) => {
                
                  setvoldet(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                  )  
            });

  }, []);
  useEffect(() => {
    if(voldet.length)
    {
      setisLoading(false);
      const modifiedData = voldet.map(({volunteerId,name,location,mobile,sessions,...item})=>({
 
       generatedUid:item.id,
       name: isEmpty(name)?(item.data.name):name,
       mobile: isEmpty(mobile)?item.data.mobile:mobile,
       location: isEmpty(location)?(item.data.location):location,
       volunteerId: isEmpty(volunteerId)?(item.data.volunteerId):volunteerId,
       sessions: isEmpty(sessions)?(item.data.sessions.length):sessions,
       
    }));
    console.log(modifiedData);
    setModifiedData(modifiedData);
 
    }
 
   }, [voldet]);
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
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },


  ];
  return (
    <div className='volunteer'>
        <div className='volunteerContainer'>
          <Navbar/>
            <Header heading="VOLUNTEER" data={customData}  onAdd={addModalHandler}/>
            <div className='data-table'>
              <VolunteerTable data={modifiedData}/>
            </div>
        </div>

        <Modal
          title="Edit Volunteer"
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

export default Volunteer;