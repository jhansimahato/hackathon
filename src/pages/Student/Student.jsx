import React, { useState, useEffect } from "react";
import Header from '../../components/Header/Header'
import StudentTable from '../../components/StudentTable/StudentTable'
import './Student.scss'
import {Modal,Input} from 'antd';

import Navbar from '../../components/Navbar/Navbar';
import { isEmpty } from 'lodash';
import { auth, db } from "../../context/firebase";

const Student = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);
  const [studdet, setstuddet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [modifiedData,setModifiedData] = useState([]);
  const [stud_att, setstud_att] = useState(new Map());
  
  useEffect(() => {

    setisLoading(true);
   var unsubscribe =  db.collection('Student')
   .onSnapshot((snapshot) => {
                
                  setstuddet(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                  )  
            });

  }, []);
  useEffect(() => {
   if(studdet.length)
   {
    const today = new Date();
    const upper_d =  today.toDateString();
    console.log(today);
    const priorDate = new Date().setDate(today.getDate() - 30)
    const lower_d = new Date(priorDate).toDateString(); 
    console.log(new Date(priorDate));
    studdet.map((arr)=>{
      let tot_sess = 0;
      let att_sess = 0;
      arr.data.sessions.map((d)=>{

        if(new Date(d.date.seconds*1000).getTime() <= today.getTime() && new Date(d.date.seconds*1000).getTime() >= new Date(priorDate).getTime())
        {
          tot_sess++;
          if(d.present)
          att_sess++;
        }
      })
      if(tot_sess== 0)
      setstud_att(stud_att.set(arr.id,"NA"));
      else
      setstud_att(stud_att.set(arr.id,(((att_sess/tot_sess)*100)).toFixed(2)));

    }) 

     setisLoading(false);
     const modifiedData = studdet.map(({studentId,name,location,mobile,className,attendance,...item})=>({

      generatedUid:item.id,
      name: isEmpty(name)?(item.data.name):name,
      mobile: isEmpty(mobile)?item.data.mobile:mobile,
      className: isEmpty(className)?(item.data.className):className,
      location: isEmpty(location)?(item.data.location):location,
      studentId: isEmpty(studentId)?(item.data.studentId):studentId,
      attendance: isEmpty(attendance)? stud_att.get(item.id):attendance,
      
   }));
   console.log(modifiedData);

   setModifiedData(modifiedData);

   }

  }, [studdet]);
  
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
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },
    {
      id:'1',
      name:'jhansi mahato',
      class:'C001',
      phone_no:'6484937483',
      locality:'Kurukshetra',
      attendance:'65%'
    },


  ];
  return (
    <div className='student'>
        <div className='studentContainer'>
          <Navbar/>
            <Header heading="STUDENT" data={customData} onAdd={addModalHandler}/>
            <div className='data-table'>
              <StudentTable data={modifiedData}/>
            </div>
        </div>

        <Modal
               title="Add Student"
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
        <label htmlFor="locality"  className="label" style={{width:'25%'}}>Locality:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,locality: e.target.value}
          })
        }}/>
        </div>  
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="class"  className="label" style={{width:'25%'}}>Class:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,class: e.target.value}
          })
        }}/>
        </div> 

        </Modal>

    </div>
  )
}

export default Student