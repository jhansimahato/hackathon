import React, { useState, useEffect } from "react";
import './Sessions.scss'
import SessionsTable from '../../components/SessionsTable/SessionsTable'
import SessionHeader from '../../components/SessionHeader/SessionHeader'
import Navbar from '../../components/Navbar/Navbar'
import { isEmpty } from 'lodash';
import { auth, db } from "../../context/firebase";

const Sessions = () => {

  const [sesdet, setsesdet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [modifiedData,setModifiedData] = useState([]);
  
  useEffect(() => {

    setisLoading(true);
   var unsubscribe =  db.collection('Session')
   .onSnapshot((snapshot) => {
                
                  setsesdet(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                  )  
            });

  }, []);
  useEffect(() => {
    if(sesdet.length)
    {
      setisLoading(false);
      const modifiedData = sesdet.map(({sessionId,city,className,noOfStudents,attendedCount,topic, ...item})=>({
 
       id: isEmpty(sessionId)?item.data.sessionId:sessionId,
       location: isEmpty(city)?item.data.city:city,
       className: isEmpty(className)?(item.data.class):className,
       noOfStudents: isEmpty(noOfStudents)?(item.data.noOfStudents):noOfStudents,
       attendedCount: isEmpty(attendedCount)?(item.data.attendedCount):attendedCount,
       topic: isEmpty(topic)?(item.data.topic):topic
       
    }));
    console.log(modifiedData);
    setModifiedData(modifiedData);
 
    }
 
   }, [sesdet]);
  const customData = [
    {
      id:'1',
      locality:'Kurukshetra',
      class:'C001',
      attendanceCount:'7',
      totalStudents:'10',
      topic:'Fundamental law of physics'
    },
    {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      },
      {
        id:'1',
        locality:'Kurukshetra',
        class:'C001',
        attendanceCount:'7',
        totalStudents:'10',
        topic:'Fundamental law of physics'
      }


  ];
  return (
    <div className='student'>
        <div className='studentContainer'>
            <Navbar/>
            <SessionHeader heading="SESSIONS" data={modifiedData}/>
            <div className='data-table'>
              <SessionsTable data={modifiedData}/>
            </div>
        </div>
    </div>
  )
}

export default Sessions;