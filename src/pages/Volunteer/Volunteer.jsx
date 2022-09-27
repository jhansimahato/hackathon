
import React from 'react'
import Header from '../../components/Header/Header'
import VolunteerTable from '../../components/VolunteerTable/VolunteerTable'
import './Volunteer.scss'

const Volunteer = () => {
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
            <Header heading="VOLUNTEER" data={customData}/>
            <div className='data-table'>
              <VolunteerTable data={customData}/>
            </div>
        </div>
    </div>
  )
}

export default Volunteer;