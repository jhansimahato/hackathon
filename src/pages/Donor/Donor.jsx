import React from 'react'
import Header from '../../components/Header/Header'
import DonorTable from '../../components/DonorTable/DonorTable';
import './donor.scss'
import {Modal,Input} from 'antd';
import {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';

const Donor = () => {
  const [add,setAdd] = useState(false);
  const [addData,setAddData] = useState([]);
  
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
    <div className='Donor'>
        <div className='donorContainer'>
          <Navbar/>
            <Header heading="DONORS" data={customData} onAdd={addModalHandler}/>
            <div className='data-table'>
              <DonorTable data={customData}/>
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