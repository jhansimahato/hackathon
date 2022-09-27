import './volunteertable.scss'
import React from 'react'
import {useState} from 'react'
import {Table,Modal,Input} from 'antd'
import { AiFillEdit } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";




const VolunteerTable = (props) => {

    const [isLoading,SetIsLoading] = useState(false);
   
    const [edit,setEdit] = useState(false);
    const [editData,setEditData] = useState([]);


    const resetEditHandler = () => {
        setEdit(false);
        setEditData(null);
    }

    const editHandler = () => {
        setEdit(false);
        setEditData(null);
    }

    const editModalHandler = (record) => {
        setEdit(!edit);
        setEditData(record);
    }

    const handleDelete =(id) => {
        Modal.confirm({
          title:'Are you sure, you want to delete this record',
          okType:"danger",
          onOk: ()=>{
           
          },
          cancelText:"No",
          okText:'Yes'
        });
         
      };
    
    const columns = [
        {
            title:'Id',
            dataIndex:'id',
            align:'left'
        },
        {
            title:'Name',
            dataIndex:'name',
            align:'left'
        },
        {
            title:'Locality',
            dataIndex:'locality',
            align:'left'
        },
        {
            title:'Phone Number',
            dataIndex:'phone_no',
            align:'left'
        },
        {
            title:'Attendance',
            dataIndex:'attendance',
            align:'right'
        },
        {
            title:'Actions',
            dataIndex:'actions',
            align:'center',
            render:(_,record)=>{
                return<>
                <AiFillEye style={{fontSize:'25px',marginRight:'6%'}}  />
                <AiFillEdit style={{fontSize:'25px',marginRight:'6%'}}  onClick={()=>editModalHandler(record)}/>
                <AiFillDelete  style={{fontSize:'25px'}}  onClick={()=>handleDelete(record)}/>
                </>
            }
        }
    ];

    return (
        <div className='volunteer-table'>
            <div className='table'>
            <Table
         pagination={{pageSize:15}}
         columns={columns}
         dataSource={props.data}
         loading={isLoading}
         mobileBreakPoint={768}
         showHeader={true}
         style={{flex:1,minWidth:100}}
         />
            </div>

            <Modal
            title="Edit Volunteer"
            visible={edit}
            onCancel={()=>{resetEditHandler();}}
            onOk={()=>{editHandler()}}
            okText="Save"
            style={{width:'100px'}}
            >
         <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="name"  className="label" style={{width:'25%'}}>Name:</label>
        <Input value={editData?.name} style={{width:'75%'}}onChange={(e) => {
          setEditData((pre) => {
            return {...pre,name: e.target.value};
          })
        }}/>
        </div> 

        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="locality"  className="label" style={{width:'25%'}}>Locality:</label>
        <Input value={editData?.locality} style={{width:'75%'}}onChange={(e) => {
          setEditData((pre) => {
            return {...pre,locality: e.target.value};
          })
        }}/>
        </div>
        <div className='textInput' style={{display:'flex',paddingTop:'3%'}}>
        <label htmlFor="phone_no"  className="label" style={{width:'25%'}}>Phone no:</label>
        <Input value={editData?.phone_no} style={{width:'75%'}} onChange={(e) => {
          setEditData((pre) => {
            return {...pre,phone_no: e.target.value};
          })
        }}/>
        </div>

            </Modal>

        </div>

    )

}
export default VolunteerTable;