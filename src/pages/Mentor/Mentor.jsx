import './mentor.scss'

import React from 'react'
import Header from '../../components/Header/Header'
import MentorTable from '../../components/MentorTable/MentorTable'


const Mentor = () => {
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
            <Header heading="MENTOR" data={customData}/>
            <div className='data-table'>
              <MentorTable data={customData}/>
            </div>
        </div>
    </div>
  )
}

export default Mentor;