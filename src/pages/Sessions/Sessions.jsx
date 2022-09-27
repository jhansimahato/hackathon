import React from 'react'
import Header from '../../components/Header/Header'
import './Sessions.scss'
import SessionsTable from '../../components/SessionsTable/SessionsTable'

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
            <Header heading="SESSIONS" data={customData}/>
            <div className='data-table'>
              <SessionsTable data={customData}/>
            </div>
        </div>
    </div>
  )
}

export default Sessions;