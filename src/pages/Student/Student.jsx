import React from 'react'
import Header from '../../components/Header/Header'
import StudentTable from '../../components/StudentTable/StudentTable'
import './Student.scss'

const Student = () => {
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
            <Header heading="STUDENT" data={customData}/>
            <div className='data-table'>
              <StudentTable data={customData}/>
            </div>
        </div>
    </div>
  )
}

export default Student