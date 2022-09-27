import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import SessionHeader from '../../components/SessionHeader/SessionHeader'
import ReviewTable from '../../components/ReviewTable/ReviewTable'
import './review.scss'

import Navbar from '../../components/Navbar/Navbar';
import { isEmpty } from 'lodash';
import { auth, db } from "../../context/firebase";

const Review = () => {
 
  let {id} =useParams();

  const [studdet, setstuddet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [modifiedData,setModifiedData] = useState([]);
  const [stud_att, setstud_att] = useState(new Map());
  const [sesdata, setsesdata] = useState([]);
  const sesarray = [];
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
    studdet.map((arr)=>{
      let tot_sess = 0;
      let att_sess = 0;
      arr.data.sessions.map((d)=>{
       
        if(d.sessionId == id)
        {
            console.log(arr.data.name)
            sesarray.push({
                studentId:arr.data.studentId,
                name:arr.data.name,
                className:arr.data.className,
                attendance: d.present?"Present":"Absent",
                review:d.review,
            })
           /* setsesdata({
                ...sesdata,
                studentId:arr.data.studentId,
                name:arr.data.name,
                className:arr.data.className,
                attendance: d.present,
                review:d.review,
            })*/
        }
      })
    }) 
    if(sesarray.length)
    {
        console.log(sesarray);
        setisLoading(false);
    const modifiedData = sesarray.map(({studentId,name,className,attendance,review,...item})=>({
   
        studentId:isEmpty(studentId)?(item.studentId):studentId,
        name: isEmpty(name)?(item.name):name,
        className: isEmpty(className)?(item.className):className,
        attendance: isEmpty(attendance)?(item.attendance):attendance,
        review: isEmpty(review)?(item.review):review,
        
     }));
     console.log(modifiedData);
  
     setModifiedData(modifiedData);
    }

   }

  }, [studdet]);
  
  useEffect(() => {
    console.log(sesdata)
    setisLoading(false);
    if(sesdata.length)
    {
        setisLoading(false);
        const modifiedData = sesdata.map(({studentId,name,className,attendance,review,...item})=>({
   
         studentId:isEmpty(studentId)?(item.studentId):studentId,
         name: isEmpty(name)?(item.name):name,
         className: isEmpty(className)?(item.className):className,
         attendance: isEmpty(attendance)?(item.present):attendance,
         review: isEmpty(review)?(item.review):review,
         
      }));
      console.log(modifiedData);
   
      setModifiedData(modifiedData);
    }
    
  }, [sesdata]);
  

  const customData = [
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },

    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    },
    {
        id:'1',
        name:'akansha',
        class:'C001',
        review:'4',
        attendance:'Present'
    }


  ];
  return (
    <div className='review'>
        <div className='reviewContainer'>
          <Navbar/>
            <SessionHeader heading="REVIEWS" data={modifiedData}/>
            <div className='data-table'>
              <ReviewTable data={modifiedData} loading={isLoading}/>
            </div>
        </div>

    

    </div>
  )
}

export default Review;