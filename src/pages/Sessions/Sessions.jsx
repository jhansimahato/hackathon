import React from 'react'
import './Sessions.scss'
import SessionsTable from '../../components/SessionsTable/SessionsTable'
import SessionHeader from '../../components/SessionHeader/SessionHeader'
import Navbar from '../../components/Navbar/Navbar'

const Sessions = () => {
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
            <SessionHeader heading="SESSIONS" data={customData}/>
            <div className='data-table'>
              <SessionsTable data={customData}/>
            </div>
        </div>
    </div>
  )
}

export default Sessions;