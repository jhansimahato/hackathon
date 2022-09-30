import React, { useState, useEffect } from "react";
import DonorTable from '../../components/DonorTable/DonorTable';
import './donor.scss'
import {Modal,Input} from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import { isEmpty } from 'lodash';
import { auth, db } from "../../context/firebase";
import DonorHeader from "../../components/DonorHeader/DonorHeader";

const Donor = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);

  const [dondet, setdondet] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [don_amt, setdon_amt] = useState(new Map());
  const [modifiedData,setModifiedData] = useState([]);
  
  useEffect(() => {

    setisLoading(true);
   var unsubscribe =  db.collection('Donor')
   .onSnapshot((snapshot) => {
                
                  setdondet(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                  )  
            });

  }, []);
  useEffect(() => {
    if(dondet.length)
    {
      dondet.map((d)=>{
        let amt  = 0;
        d.data.donations.map((e)=>{
          amt += parseInt(e.amount) ;
        })
        setdon_amt(don_amt.set(d.id,amt.toString()));
      })

      setisLoading(false);
      const modifiedData = dondet.map(({donorId,name,email,mobile,sessions,amount,...item})=>({
 
      generatedUid : item.id,
       donorId:isEmpty(donorId)?(item.data.donorId):donorId,
       name: isEmpty(name)?(item.data.name):name,
       mobile: isEmpty(mobile)?item.data.mobile:mobile,
       email: isEmpty(email)?(item.data.email):email,
       amount:isEmpty(amount)?("₹ "+numberWithCommas(don_amt.get(item.id))):("₹ "+numberWithCommas(amount))
       
       
    }));
    console.log(modifiedData);
    setModifiedData(modifiedData);
 
    }
 
   }, [dondet]);


   function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
  
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
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    },
    {
        id:1,
        name:'nirmal scaria',
        total_donations:'20000',
        location:'delhi',
        mobile:'789465738',
    }


  ];
  return (
    <div className='donor'>
        <div className='donorContainer'>
          <Navbar/>
            <DonorHeader heading="DONORS" data={modifiedData} onAdd={addModalHandler}/>
            <div className='data-table'>
              <DonorTable data={modifiedData}/>
            </div>
        </div>

        <Modal
               title="Add Donor"
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
        <label htmlFor="mobile"  className="label" style={{width:'25%'}}>Phone No:</label>
        <Input type='text' onChange={(e) => {
          setAddData((pre)=> {
            return {...pre,mobile: e.target.value}
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

        </Modal>

    </div>
  )
}

export default Donor