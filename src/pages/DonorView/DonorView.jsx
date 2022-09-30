import {useParams} from 'react-router-dom'
import React, { useState, useEffect } from "react";
import DonorViewHeader from '../../components/DonorViewHeader/DonorViewHeader'
import DonorViewTable from '../../components/DonorViewTable/DonorViewTable'
import './donorview.scss'
import Navbar from '../../components/Navbar/Navbar';
import { auth, db } from "../../context/firebase";

const DonorView = () => {
  const [isLoading,setIsLoading] = useState(false);
  let {id} =useParams();
  const [transaction, settransaction] = useState([]);
  
  
  useEffect(() => {
    var unsubscribe =  db.collection('Donor').doc(id)
   .onSnapshot((snapshot) => {
                
                  settransaction(
                    console.log(snapshot)
                  )  
            });

  }, []);

 /* useEffect(() => {
    if(transaction.length)
    {

      transaction.map((arr)=>{
        arr
      })
      setIsLoading(false);
      const modifiedData = transaction.map(({sessionId,city,className,noOfStudents,attendedCount,topic, ...item})=>({
 
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
 
   }, [sesdet]);*/

  const customData = [
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   },
   {
    id:'1',
    date:'22-02-22',
    amount:'20000',
    remarks:'donation for new tables'
   }

  ];
  return (
    <div className='donor-view'>
        <div className='donorviewContainer'>
          <Navbar/>
            <DonorViewHeader heading="SAKSHAM HANS" data={customData}/>
            <div className='data-table'>
              <DonorViewTable data={customData} loading={isLoading}/>
            </div>
        </div>

    

    </div>
  )
}

export default DonorView;