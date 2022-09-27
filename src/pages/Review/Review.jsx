import {useParams} from 'react-router-dom'
import React from 'react'
import SessionHeader from '../../components/SessionHeader/SessionHeader'
import ReviewTable from '../../components/ReviewTable/ReviewTable'
import './review.scss'
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';

const Review = () => {
  const [isLoading,setIsLoading] = useState(false);
  let {id} =useParams();
  
  

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
            <SessionHeader heading="REVIEWS" data={customData}/>
            <div className='data-table'>
              <ReviewTable data={customData} loading={isLoading}/>
            </div>
        </div>

    

    </div>
  )
}

export default Review;